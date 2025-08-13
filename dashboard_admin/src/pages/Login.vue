<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded shadow-md w-80">
      <h2 class="text-xl font-bold mb-4">Login</h2>
      <form @submit.prevent="handleLogin">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="border w-full p-2 mb-3 rounded"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="border w-full p-2 mb-3 rounded"
        />
        <button
          type="submit"
          class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
      <p class="mt-3 text-sm">
        Belum punya akun?
        <router-link to="/register" class="text-blue-600">Register</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    handleLogin() {
      if (this.email && this.password) {
        alert("Login berhasil!")
        this.$router.push("/")
      } else {
        alert("Isi semua field!")
      }
    }
  }
}
</script>
