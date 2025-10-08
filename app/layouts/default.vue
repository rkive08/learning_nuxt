<!-- app/layouts/default.vue -->
<template>
  <div class="min-h-screen flex bg-gray-100 text-gray-800">
    <!-- Sidebar -->
    <aside class="w-64 bg-blue-600 text-white flex flex-col p-4">
      <div class="text-2xl font-bold mb-8 text-center">
        Belajar Nuxt & Golang
      </div>

      <nav class="flex flex-col space-y-2">
        <NuxtLink
          to="/dashboard"
          class="px-4 py-2 rounded hover:bg-blue-700 transition"
          active-class="bg-blue-700"
        >
          Dashboard
        </NuxtLink>
        <NuxtLink
          to="#"
          class="px-4 py-2 rounded hover:bg-blue-700 transition"
          active-class="bg-blue-700"
        >
          Settings
        </NuxtLink>
      </nav>

      <div class="mt-auto">
        <button
          @click="logout"
          class="flex items-center gap-2 w-full bg-blue-600 hover:bg-blue-800 transition rounded px-4 py-2 mt-8"
        >
          <img src="/icons/power.svg" alt="Logout" class="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-8 overflow-y-auto">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/auth/useAuth'
const { logout } = useAuth()
</script>
