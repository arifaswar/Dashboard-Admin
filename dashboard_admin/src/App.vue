<script setup lang="ts">
import SideBar from './components/SideBar.vue';
import Navbar from './components/Navbar.vue';
import Dashboard from './pages/Dashboard.vue';
</script>

<template>
  <div class="flex min-w-screen w-full">
   <SideBar />
   <div class="flex-1 bg-gray-100 min-h-screen">
    <Navbar />
    <Dashboard />
   </div>
  </div>
</template>

