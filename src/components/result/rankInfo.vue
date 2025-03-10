<script setup>
import { ref, defineProps, watch, computed } from 'vue';


const props = defineProps({
    rank: Object
});

// 소환서 랭크 정보
const info = computed(() => props.rank ?? { tier: '', rank: '', queueType: '', wins: 0, losses: 0 });

// 승률 계산
const winRate = computed(() => {
    const totalGames = info.value.wins + info.value.losses;
    return totalGames > 0 ? ((info.value.wins / totalGames) * 100).toFixed(1) : '0';
});

// 이미지 경로 처리
const imagePath = computed(() => {
    if (!info.value || !info.value.tier) {
        return '/assets/RankedEmblemsLatest/Rank=emerald.png';
    }
    return `/assets/RankedEmblemsLatest/Rank=${info.value.tier}.png`;
});

// Watch로 값 변경 확인
watch(() => props.rank, (newRank) => {
    console.log('Updated rank:', newRank);
    console.log('Updated tier:', newRank?.tier);
});
</script>
<template>

    <div class="img-box p-4 col-3">
        <img :src="imagePath" alt="">
    </div>
    <div class="rank-info col-9">
        <div style="color: gray; font-size: 16px; font-weight: 500;">{{ info.queueType || '정보 없음' }}</div>
        <div><span style="color: #1BB5CA; font-size: 20px;" class="fw-semibold lh-1">{{ info.tier + " " +
            info.rank }}</span><span class="mx-2">{{ info.leaguePoints }} LP</span></div>
        <div><span style="color: gray; font-size: 16px; font-weight: 700;">승률 {{ winRate }}% </span>
            <span style="font-size: 14px; color: gray; font-weight: 500;" class="mx-2"> ({{ info.wins }}승 {{ info.losses
                }}패)</span>
        </div>
    </div>
</template>
<style scoped>
.img-box {
    background-color: #FAFAFA;
}

.img-box img {
    width: 100px;
    height: 100px;
}

.rank-info {
    padding-left: 30px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>