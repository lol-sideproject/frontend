import api from "@/api";

const BASE_URL = "/api/test";

export default {
  async getList(val) {
    console.log(val);
    const { data } = await api.get(BASE_URL, { params: { name: val } });
    console.log("Test GET LIST: ", data);
    return data;
  },
};
