<script setup>
import { ref, onMounted } from "vue";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from "chart.js";

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title);

const chartInstance = ref(null);
const chartCanvas = ref(null);

onMounted(() => {
    if (chartCanvas.value) {
        chartInstance.value = new Chart(chartCanvas.value, {
            type: "line",
            data: {
                labels: ["2월 07일", "2월 10일"], // x축 (날짜)
                datasets: [
                    {
                        label: "티어 변화",
                        data: [0, 3], // Platinum 3 -> Emerald 4 (올라가는 변화)
                        borderColor: "rgba(75, 192, 192, 1)",
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        borderWidth: 2,
                        pointRadius: 5,
                        tension: 0.4, // 선을 부드럽게
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        title: { display: false },
                    },
                    y: {
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function (value, index, ticks) {
                                const tier = ['Platinum 3', 'Platinum 2', 'Platinum 1', 'Emerald 4'];
                                return tier[value];
                            }
                        }
                    }
                },
            },
        });
    }
});
</script>
<template>
    <div>
        <canvas ref="chartCanvas" style="width: 100%; height: 100%;"></canvas>
    </div>
</template>
<style></style>