<template>
    <div class="bg-white p-4 rounded shadow">
    <h3 class="text-lg font-semibold mb-4">Sales Chart</h3>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import {BarElement, CategoryScale, Chart as ChartJs, Legend, LinearScale, LineElement, plugins, PointElement, Title, Tooltip} from "chart.js"
import {Bar} from 'vue-chartjs'
ChartJs.register(
    Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement
)

const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
    datasets: [
        {
            label: 'Sales',
            backgroundColor: '#1d4ed8',
            data: [40, 60, 80, 50, 70, 90]
        }

    ]
}

const chartOptions = {
    responsive: true,
    plugins: {
        Legend: {
            display: true,
            position: 'bottom'
        }
    }
}
</script>