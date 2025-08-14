<script setup lang="ts">
import SideBar from './components/SideBar.vue';
import Navbar from './components/Navbar.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import Footer from './components/Footer.vue'

const route = useRoute();

const hideLayoutPath = ['/login', '/register']

const showLayout = computed(() => {
  return !hideLayoutPath.includes(route.path)
})
</script>

<template>
  <div class="flex min-w-screen w-full bg-white text-black">
    <template v-if="showLayout">
      <SideBar />
      <div class="flex-1 bg-gray-100 min-h-screen">
        <Navbar />
        <router-view />
      </div>
      <Footer />
    </template>
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

