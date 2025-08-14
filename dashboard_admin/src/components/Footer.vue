<template>
  <footer class="bg-gray-900 text-white py-2 fixed bottom-0 w-10/12 h-12 ml-64">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      <!-- Logo / Nama Project -->
      <div class="text-lg font-semibold">
        Dashboard Admin
      </div>

      <!-- Navigation Link -->
      <div class="flex gap-4 mt-4 md:mt-0">
        <a href="/" class="hover:text-gray-400">Home</a>
        <a href="/about" class="hover:text-gray-400">About</a>
        <a href="/contact" class="hover:text-gray-400">Contact</a>
      </div>

      <!-- Copyright -->
      <div class="mt-4 md:mt-0 text-sm text-gray-400">
        © {{ new Date().getFullYear() }} Dashboard Admin. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
