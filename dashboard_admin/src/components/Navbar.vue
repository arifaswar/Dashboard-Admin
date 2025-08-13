<template>
  <div class="bg-white shadow p-4 flex justify-between items-center sm:flex-row sm:items-center px-4 flex-col gap-2">
    <h1 class="text-lg font-bold">Dashboard</h1>
    <router-link 
      to="/login" 
      class="px-4 py-2 rounded text-white bg-red-700 text-center w-full sm:w-auto"
    >
      Logout
    </router-link>
  </div>
</template>

<script>
export default {
  name: "DashboardHeader"
}
</script>
