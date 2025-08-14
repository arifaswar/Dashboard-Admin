<template>
  <div :class="isDark ? 'dark' : ''">
    <div class="bg-gray-800 text-white w-64 min-h-screen p-4 fixed transition-colors duration-300">
      <h2 class="text-xl font-bold mb-6">Admin Panel</h2>
      <div>
        <ul class="space-y-2">
          <li class="block py-2 px-3 rounded hover:bg-gray-700">
            <a href="/" class="text-white">Dashboard</a>
          </li>
          <li class="block py-2 px-3 rounded hover:bg-gray-700">
            <a href="/setting" class="text-white">Setting</a>
          </li>
        </ul>
    </div>
    </div>
  </div>
</template>

<script setup>

</script>
