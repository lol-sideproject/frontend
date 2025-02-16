<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div id="app" class="border border-primary text-center">
    <span class="fs-1">main 화면 입니다.</span>
    <a href="/result">전적검색</a>
  </div>
  <RouterView />
</template>

<style scoped></style>
