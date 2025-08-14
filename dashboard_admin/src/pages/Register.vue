<template>
  <div class="flex items-center justify-center min-h-screen min-w-screen bg-gray-100">
    <div class="bg-white p-6 rounded shadow-md w-80">
      <h2 class="text-xl font-bold mb-4">Register</h2>
      <form @submit.prevent="handleRegister">
        <input
          v-model="name"
          type="text"
          placeholder="Nama Lengkap"
          class="border w-full p-2 mb-3 rounded"
        />
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
          class="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Register
        </button>
      </form>
      <p class="mt-3 text-sm">
        Sudah punya akun?
        <router-link to="/login" class="text-blue-600 hover:text-emerald-900">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    }
  },
  methods: {
    handleRegister() {
      if (this.name && this.email && this.password) {
        alert("Registrasi berhasil!")
        this.$router.push("/login")
      } else {
        alert("Isi semua field!")
      }
    }
  }
}
</script>
