<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
      <h1 class="text-2xl font-semibold text-center mb-6 text-gray-800">
        Reset Password
      </h1>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">New Password</label>
          <input
            id="password"
            type="password"
            v-model="newPassword"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter new password"
          />
        </div>

        <div v-if="message" class="text-green-600 text-sm">{{ message }}</div>
        <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          {{ loading ? 'Resetting...' : 'Reset Password' }}
        </button>
      </form>

      <div class="text-center mt-4">
        <NuxtLink to="/login" class="text-sm text-blue-600 hover:underline">
          Back to login
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useResetPassword } from '~/composables/auth/useResetPassword'

const route = useRoute()
const token = route.query.token as string

const newPassword = ref('')
const { loading, message, error, resetPassword } = useResetPassword()

const handleSubmit = async () => {
  await resetPassword(token, newPassword.value)

  if (message.value) {
    setTimeout(() => navigateTo('/login'), 2000)
  }
}
</script>
