<script setup lang="ts">
import DashboardChart from '../components/DashboardChart.vue'
</script>
<template>
  <div class="p-6 bg-gray-100 min-h-screen ml-64 w-10/12 mt-24 mb-24">
    <h2 class="text-2xl font-bold mb-6">Dashboard</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

      <!-- Card 1-->
      <div class="bg-white p-8 shadow rounded flex items-center gap-4">
        <div class="bg-blue-100 text-blue-600 p-3 rounded-full">
          📈
        </div>
        <div>
          <p class="text-sm text-gray-500">Total Sales</p>
          <p class="text-lg font-bold">$12,345</p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="bg-white p-4 shadow rounded flex items-center gap-4">
        <div class="bg-green-100 text-green-600 p-3 rounded-full">
          👥
        </div>
        <div>
          <p class="text-sm text-gray-500">Users</p>
          <p class="text-lg font-bold">1,234</p>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="bg-white p-4 shadow rounded flex items-center gap-4">
        <div class="bg-yellow-100 text-yellow-600 p-3 rounded-full">
          🛒
        </div>
        <div>
          <p class="text-sm text-gray-500">Orders</p>
          <p class="text-lg font-bold">567</p>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="bg-white p-4 shadow rounded flex items-center gap-4">
        <div class="bg-red-100 text-red-600 p-3 rounded-full">
          💬
        </div>
        <div>
          <p class="text-sm text-gray-500">Messages</p>
          <p class="text-lg font-bold">89</p>
        </div>
      </div>
    </div>

    <!-- Bagian Lain -->
    <div class="bg-white p-6 shadow rounded mb-4">
      <h3 class="text-lg font-bold mb-4">Recent Activity</h3>
      <ul class="space-y-2">
        <li class="text-gray-600">User John purchased "Product A"</li>
        <li class="text-gray-600">New user Mary joined</li>
        <li class="text-gray-600">Order #1234 has been shipped</li>
      </ul>
    </div>
    <DashboardChart />
  </div>
</template>

