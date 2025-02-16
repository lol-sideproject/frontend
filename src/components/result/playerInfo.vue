<script setup>
import chart from '@/components/result/tierGraph.vue'
import recordItem from './recordItem.vue';

import { ref } from "vue";

const champions = ref([
    {
        name: "아리",
        image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ahri.png",
        kills: 5,
        deaths: 2,
        assists: 8,
        kda: (5 + 8) / 2,
        games: 3,
        wins: 2,
        losses: 1
    },
    {
        name: "야스오",
        image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Yasuo.png",
        kills: 7,
        deaths: 4,
        assists: 5,
        kda: (7 + 5) / 4,
        games: 5,
        wins: 3,
        losses: 2
    },
    {
        name: "리 신",
        image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/LeeSin.png",
        kills: 6,
        deaths: 3,
        assists: 10,
        kda: (6 + 10) / 3,
        games: 4,
        wins: 2,
        losses: 2
    },
    {
        name: "제드",
        image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Zed.png",
        kills: 9,
        deaths: 3,
        assists: 4,
        kda: (9 + 4) / 3,
        games: 6,
        wins: 4,
        losses: 2
    },
    {
        name: "징크스",
        image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Jinx.png",
        kills: 8,
        deaths: 6,
        assists: 12,
        kda: (8 + 12) / 6,
        games: 7,
        wins: 5,
        losses: 2
    },
    {
        name: "이즈리얼",
        image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ezreal.png",
        kills: 5,
        deaths: 2,
        assists: 7,
        kda: (5 + 7) / 2,
        games: 5,
        wins: 3,
        losses: 2
    },
    {
        name: "카이사",
        image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kaisa.png",
        kills: 10,
        deaths: 5,
        assists: 8,
        kda: (10 + 8) / 5,
        games: 6,
        wins: 4,
        losses: 2
    },
    {
        name: "쓰레쉬",
        image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Thresh.png",
        kills: 2,
        deaths: 5,
        assists: 15,
        kda: (2 + 15) / 5,
        games: 3,
        wins: 1,
        losses: 2
    },
    {
        name: "모르가나",
        image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Morgana.png",
        kills: 4,
        deaths: 2,
        assists: 10,
        kda: (4 + 10) / 2,
        games: 4,
        wins: 3,
        losses: 1
    },
    {
        name: "베이가",
        image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Veigar.png",
        kills: 7,
        deaths: 4,
        assists: 6,
        kda: (7 + 6) / 4,
        games: 5,
        wins: 3,
        losses: 2
    }
]);

const getKdaClass = (kda) => {
    if (kda >= 5) {
        return "high-kda";
    } else if (kda >= 4) {
        return "good-kda";
    } else if (kda >= 3) {
        return "mid-kda";
    } else {
        return "normal-kda";
    }
}
</script>
<template>
    <div class="section">
        <!-- 소환사정보 -->
        <div class="bg-cover">
            <div class="row player-profile m-0">
                <div class="col-1 avatar-box">
                    <div class="avatar">
                        <img src="/src/assets/6760.png" alt="소환사아이콘">
                    </div>
                </div>
                <div class="col-11 border border-danger">
                    <div class="text-white" style="font-size: 12px;">래더 랭킹 20,080위 (상위 35.69%)</div>
                    <div class="text-white font-weight-bold mb-2" style="font-size: 20px;">이길수있조#kr1</div>
                    <div class="d-flex">
                        <button class="btn renewal">전적 갱신</button>
                        <div class="card-make">
                            <button>
                                닥지지 카드 만들기
                            </button>
                        </div>
                        <div class="favorite">☆</div>
                    </div>
                    <div class="recently">최근 갱신: 4일전</div>
                </div>
            </div>
            <div class="d-flex player-info">
                <div class="fw-semibold p-2">
                    종합
                </div>
                <div class="fw-semibold p-2">
                    인게임 정보
                </div>
            </div>
        </div>
        <!-- 종합, 인게임 정보 -->
        <div class="synthesis mt-3">
            <div class="d-flex align-items-stretch">
                <!-- 랭크 티어 -->
                <div class="rank col-4">
                    <div class="solo-rank d-flex">
                        <div class="img-box p-4 col-3">
                            <img src="../../assets/platinum.png" alt="">
                        </div>
                        <div class="rank-info col-9">
                            <div style="color: gray; font-size: 14px; font-weight: 500;">솔로 랭크</div>
                            <div><span style="color: #1BB5CA; font-size: 18px;" class="fw-semibold lh-1">플래티넘
                                    1</span><span class="mx-2">7 LP</span></div>
                            <div><span style="color: gray; font-size: 14px; font-weight: 700;">승률 45.7%</span><span
                                    style="font-size: 12px; color: gray; font-weight: 500;" class="mx-2">(9승 11패)</span>
                            </div>
                        </div>
                    </div>
                    <div class="team-rank d-flex mt-3">
                        <div class="img-box p-4 col-3">
                            <img src="../../assets/gold.png" alt="">
                        </div>
                        <div class="rank-info col-9">
                            <div style="color: gray; font-size: 14px; font-weight: 500;">솔로 랭크</div>
                            <div><span style="color: #1BB5CA; font-size: 18px;" class="fw-semibold lh-1">골드
                                    3</span><span class="mx-2">92 LP</span></div>
                            <div><span style="color: gray; font-size: 14px; font-weight: 700;">승률 41.7%</span><span
                                    style="font-size: 12px; color: gray; font-weight: 500;" class="mx-2">(5승 7패)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 티어 그래프 -->
                <div class="tier-graph col-6 mx-3">
                    <div class="p-3 title" style="font-weight: 600; color: gray; font-size: 14px;">티어 그래프</div>
                    <div class="h-100">
                        <chart style="height: 200px;" class="p-3" />
                    </div>
                </div>
                <!-- 칼바람 or something -->
                <div class="col-2 special">
                    <div class="p-3 title text-center" style="font-weight: 600; color: gray; font-size: 14px;">
                        칼바람 나락
                    </div>
                    <div class="text-center p-3">
                        <span class="fw-semibold d-block">승률 33%</span>
                        <span style="font-size: 13px; color: gray;" class="d-block mt-0 fw-600">1승 2패</span>
                    </div>
                    <div class="p-3 title text-center" style="font-weight: 600; color: gray; font-size: 14px;">
                        우르프
                    </div>
                    <div class="text-center p-3">
                        <span class="fw-semibold d-block">승률100%</span>
                        <span style="font-size: 13px; color: gray;" class="d-block mt-0 fw-600">1승 0패</span>


                    </div>
                </div>
            </div>
        </div>
        <!-- 전적 정보 -->
        <div class="d-flex">
            <div style="width: 30%;">
                <!-- 사용 챔피언 정보들 -->
                <div>
                    <table style="width: 100%;">
                        <tr>
                            <th>챔피언</th>
                            <th>KDA</th>
                            <th>승률</th>
                        </tr>
                        <tr v-for="champ in champions" :key="champ.name">
                            <td style="color: white;">
                                <img :src="champ.image" :alt="champ.name" class="champion-image"
                                    style="width: 30px; height: 30px;">
                                {{ champ.name }}
                            </td>
                            <td class="text-center">{{ champ.kills.toFixed(1) }}/ <span style="color: red;">{{
                                champ.deaths.toFixed(1) }}</span>/{{ champ.assists.toFixed(1) }} <br> <span
                                    :class="getKdaClass(champ.kda)"> {{ champ.kda.toFixed(2) }} KDA </span> </td>
                            <td class="text-center">{{ champ.games }}전 {{ champ.wins }}승 {{ champ.losses }}패</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="match-data" style="width: 70%;">
                <recordItem />
            </div>
        </div>
    </div>
</template>
<style scoped>
.section {
    background-color: #F5F5F5;
}

.bg-cover {
    background-image: url('../../assets/bg-profile-header.jpg');
    background-size: cover;
    height: 210px;
}

.player-profile {
    padding: 24px 28px;
    box-sizing: border-box;
    width: 100%;
    height: 80%;
}

.avatar-box {
    position: relative;
}

.avatar {
    width: 80px;
    height: 80px;
    position: absolute;
    top: 10%;
}

.avatar img {
    max-width: 100%;
    border-radius: 100%;
}

.bg-cover .renewal {
    background-color: #11B288;
    font-size: 14px;
    color: white;
    font-weight: 600;
    margin-right: 8px;
}

.bg-cover .card-make {
    border: 3px solid transparent;
    height: 50px;
    border-radius: 6px;
    background-image: linear-gradient(#fff, #fff),
        linear-gradient(to right,
            #fff34a 0%,
            #10be00 29%,
            #4ffff6 50%,
            #1ecaff 60%,
            #ed2aff 80%,
            #ff00b3 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    margin-right: 8px;
}

.card-make button {
    box-sizing: border-box;
    background-color: #1B1B1E;
    font-weight: bold;
    color: white;
    height: 100%;
    padding: 0px 14px;
    font-size: 14px;
    border-radius: 3px;
}

.favorite {
    font-size: 24px;
    color: white;
    background-color: rgba(0, 0, 0, 0.363);
    padding: 0 12px;
    border-radius: 4px;
    line-height: 40px;
    font-weight: 600;
}

.recently {
    margin-top: 8px;
    font-size: 12px;
    color: white;
    font-weight: 500;
}

.player-info {
    background-color: #1b1b1e65;
    padding-left: 28px;
    height: 20%;
}

.player-info div {
    color: white;
    background-color: #1b1b1e65;
    font-size: 14px;
    box-sizing: border-box;
    text-align: center;
}

.solo-rank {
    border: 1px solid #E5E7EB;
}

.team-rank {
    border: 1px solid #E5E7EB;
}

.img-box {
    background-color: #FAFAFA;
}

.img-box img {
    width: 80px;
    height: 80px;
}

.rank-info {
    padding-left: 30px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.tier-graph {
    border: 1px solid #E5E7EB;
}

.title {
    background-color: white;
    border-bottom: 1px solid #E5E7EB;
}

.special {
    border: 1px solid #E5E7EB;
}

th {
    background-color: #1C1C1C;
    color: white;
    padding: 15px;
    text-align: center;
}

td {
    background-color: #2C2C2C;
    color: #BFBFBF;
    border-bottom: 1px solid #444444;
    border-top: 1px solid #444444;
    padding-top: 5px;
    padding-bottom: 5px;
}

.mid-kda {
    color: #03BBA3;
}

.good-kda {
    color: #0093FF;
}

.high-kda {
    color: #F06E00;
}

.match-data {
    margin-left: 10px;
    background-color: #1B1B1E;
    padding: 14px;
}
</style>