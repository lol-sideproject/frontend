<template>
    <div class="match-card">
        <div class="match-info">
            <!-- 왼쪽: 게임 정보 -->
            <div class="left">
                <p class="match-type">솔로랭크</p>
                <p class="match-time">6일 전</p>
                <p class="match-result victory">승리 50:46</p>
                <p class="rank-tier">Gold 4</p>
            </div>

            <!-- 챔피언 정보 -->
            <div class="champion-info mx-5">
                <div class="d-flex">
                    <img :src="matchData.championImage" class="champion-icon" />
                    <div class="spells-runes d-flex">
                        <div class="spells">
                            <img v-for="(spell, index) in matchData.spells" :key="'spell' + index" :src="spell"
                                class="spell-icon d-block" />
                        </div>
                        <div class="runes">
                            <img :src="matchData.runeMain" class="rune-icon d-block" />
                            <img :src="matchData.runeSub" class="rune-icon d-block" />
                        </div>
                    </div>
                    <div class="kda-info text-center">
                        <div class="kda text-center">
                            {{ matchData.kills }} / <span class="deaths" style="color: red;">{{ matchData.deaths
                                }}</span> / {{
                                    matchData.assists }}
                        </div>
                        <div class="kda-score" style="color: gray; font-size: 12px;">{{ matchData.kda.toFixed(2) }} KDA
                        </div>
                    </div>

                </div>
                <!-- 아이템 목록 -->
                <div class="items">
                    <img v-for="(item, index) in matchData.items" :key="'item' + index" :src="item" class="item-icon" />
                </div>
            </div>
            <!-- AI Score -->
            <div class="ai-score mx-5">
                <div class="score-label">AI-Score</div>
                <div class="score">{{ matchData.aiScore }}</div>
                <div class="rank">{{ matchData.rank }}등</div>
            </div>
            <div class="player-list mx-5">
                <ul class="team me-5">
                    <li v-for="(player, index) in matchData.team1" :key="'team1' + index">
                        <img :src="player.championImage" class="player-champion-icon" />
                        <span>{{ player.name }}</span>
                    </li>
                </ul>
                <ul class="team">
                    <li v-for="(player, index) in matchData.team2" :key="'team2' + index">
                        <img :src="player.championImage" class="player-champion-icon" />
                        <span>{{ player.name }}</span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 플레이어 목록 (닉네임 앞에 챔피언 초상화 추가) -->

    </div>
</template>

<script setup>
import { ref } from "vue";

const matchData = ref({
    championImage: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kaisa.png",
    spells: [
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SummonerFlash.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SummonerHeal.png"
    ],
    runeMain: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png",
    runeSub: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png",
    kills: 19,
    deaths: 8,
    assists: 15,
    kda: (19 + 15) / 8,
    aiScore: 80,
    rank: 2,
    items: [
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3031.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/6672.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3094.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3036.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3006.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3363.png"
    ],
    team1: [
        { name: "프로젝트 모건도", championImage: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ahri.png" },
        { name: "왼쪽날개락", championImage: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Yasuo.png" },
        { name: "배탈나는 우승자", championImage: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/LeeSin.png" },
        { name: "PORO of LEGEND", championImage: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Zed.png" },
        { name: "바위번지점프", championImage: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Jinx.png" }
    ],
    team2: [
        { name: "쪽지시험", championImage: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ezreal.png" },
        { name: "심리학교수김심리", championImage: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kaisa.png" },
        { name: "찬스브", championImage: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Thresh.png" },
        { name: "renegade", championImage: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Morgana.png" },
        { name: "그럴만두해", championImage: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Veigar.png" }
    ]
});
</script>

<style scoped>
ul {
    padding: 0;
    margin: 0;
}

.match-card {
    background-color: #0063f8;
    color: white;
    border-radius: 8px;
    padding-left: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.match-info {
    display: flex;
    align-items: center;
    background-color: #1b2a41;
    padding: 0 10px;
}

.left {
    flex-direction: column;
    margin-left: 20px;
    margin-right: 50px;
}

.match-type,
.match-time,
.match-result,
.rank-tier {
    margin: 2px 0;
    font-size: 14px;
}

.victory {
    color: #4CAF50;
    font-weight: bold;
}

.champion-info {
    /* display: flex; */
    align-items: center;
}

.champion-icon {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin-right: 8px;
}

.spell-icon,
.rune-icon {
    width: 24px;
    height: 24px;
    border-radius: 4px;
}

.rune-icon.small {
    opacity: 0.8;
    width: 20px;
    height: 20px;
}

.items {
    display: flex;
    gap: 5px;
}

.item-icon {
    width: 32px;
    height: 32px;
    border-radius: 5px;
}

.ai-score {
    padding: 0 20px;
    text-align: center;
}

.ai-score .score {
    background-color: rgb(249, 174, 24);
    margin: 4px auto;
    padding: 3px 4px;
    font-size: 18px;
    border-radius: 5px;
}

.player-list {
    padding: 0;
    display: flex;
    justify-content: space-between;
    margin: 10px auto;
    font-size: 14px;
}

.team li {
    display: flex;
    align-items: center;
    padding: 2px 0;
    color: #B2B2C2;
    font-size: 12px;
}

.team li span {
    padding-left: 4px;
}

.player-champion-icon {
    width: 24px;
    height: 24px;
    border-radius: 5px;
}

.kda-info {
    padding: 4px 10px;
}
</style>