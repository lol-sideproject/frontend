import { createRouter, createWebHistory } from "vue-router";
import authRotes from "./auth";
import boardRotes from "./board";
import { isAuthenticated } from "@/util/guards";
import test from '@/components/test.vue';
import result from '@/pages/result.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/test', component: test},
    {path: '/result', component: result},
    ...authRotes,
    ...boardRotes,
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth === false) {
    return next();
  }

  // 2. 로그인 상태 확인
  const auth = isAuthenticated();

  // 로그인되지 않은 경우
  if (!auth) {
    console.log("로그인 필요.");
    return next({ name: "home" });
  }

  // 3. 권한 검증
  if (
    to.meta.role === "ROLE_STUDENT" &&
    Array.isArray(auth.roles) &&
    !auth.roles.includes("ROLE_STUDENT")
  ) {
    console.log("학생 권한이 필요합니다.");
    return next({ name: "home" });
  }

  if (
    to.meta.role === "ROLE_TEACHER" &&
    Array.isArray(auth.roles) &&
    !auth.roles.includes("ROLE_TEACHER")
  ) {
    console.log("선생님 권한이 필요합니다.");
    return next({ name: "home" });
  }

  // 4. 모든 조건이 맞으면 next()
  next();
});

export default router;
