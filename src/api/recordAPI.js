import api from "@/api";
import { ref } from "vue";
const BASE_URL = "/api/record";


export default {
  async getList(val) {
    console.log(val);
    const { data } = await api.get(BASE_URL, { params: { name: val } });
    console.log("Test GET LIST: ", data);
    return data;
  },

  async getMatchInfo(matchId) {
    console.log('경기 정보 보냄');
    const {data} = await api.get(BASE_URL + "/match/" + matchId);
    return data;
  },

  async getRankInfo(encryptedSummonerId) {
    console.log("소환사 랭크 정보 소환사 아이디 받음 ==> " , encryptedSummonerId);
    const {data} = await api.get(BASE_URL+`/rank/${encryptedSummonerId}`);
    return data;
  },
};
