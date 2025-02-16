<template>
    <div class="match-card" :class="{ victory: matchData.result === '승리', defeat: matchData.result === '패배' }">
        <div class="match-info"
            :class="{ victory: matchData.result === '승리', defeat: matchData.result === '패배', mvp: matchData.aiScore >= 80 }">
            <!-- 왼쪽: 게임 정보 -->
            <div class="left col-1">
                <p class="match-type">솔로랭크</p>
                <p class="match-time">6일 전</p>
                <p class="match-result victory">{{ matchData.result }} 50:46</p>
                <p class="rank-tier">Gold 4</p>
            </div>

            <!-- 챔피언 정보 -->
            <div class="champion-info col-3">
                <div class="d-flex">
                    <img :src="matchData.championImage" class="champion-icon" />
                    <div class="spells-runes d-flex">
                        <div class="spells">
                            <img v-for="(spell, index) in matchData.spells" :key="index" :src="spell"
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
            <div class="ai-score col-2">
                <div class="score-label">AI-Score</div>
                <div class="score">{{ matchData.aiScore }}</div>
                <div class="rank">{{ matchData.rank }}등</div>
            </div>
            <div class="player-list col-4">
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
import { defineProps } from "vue";

const props = defineProps({
    matchData: Object
});

</script>

<style scoped>
ul {
    padding: 0;
    margin: 0;
}

@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

@keyframes shineEffect {
    0% {
        background-position: -100% 0;
        opacity: 1;
    }

    100% {
        background-position: 100% 0;
        /* opacity: 0; */
    }
}

.match-card.victory {
    background-color: #0063f8;
    color: white;
    border-radius: 8px;
    padding-left: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.match-card.defeat {
    background-color: red;
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

.match-info.defeat {
    display: flex;
    align-items: center;
    background-color: #4F2C2F;
    padding: 0 10px;
}

.mvp {
    display: flex;
    align-items: center;
    /* padding: 0 10px; */
    background: linear-gradient(90deg, rgb(23, 37, 74) 0%, rgb(34, 67, 102) 23%, rgb(64, 44, 141) 42%, rgb(127, 59, 151) 55%, rgb(175, 99, 70) 81%, rgb(137, 26, 57) 100%);
    position: relative;
    /* animation: gradientAnimation 3s infinite linear; */
    /* animation: shiningEffect 2s infinite linear; */
}

.mvp::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(60deg, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0.6) 70%, rgba(255, 255, 255, 0) 80%);
    background-size: 200% 100%;
    animation: shineEffect 2s infinite linear;
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
    margin: 5px auto;
    font-size: 14px;
}

.team li {
    display: flex;
    align-items: center;
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