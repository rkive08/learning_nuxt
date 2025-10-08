<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
      <h1 class="text-2xl font-semibold text-center mb-6 text-gray-800">
        Forgot Password
      </h1>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            id="email"
            type="email"
            v-model="email"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div v-if="message" class="text-green-600 text-sm">{{ message }}</div>
        <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          {{ loading ? 'Sending...' : 'Send Reset Link' }}
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
import { useForgotPassword } from '~/composables/auth/useForgotPassword'

const email = ref('')
const { loading, message, error, sendResetLink } = useForgotPassword()

const handleSubmit = async () => {
  await sendResetLink(email.value)
}
</script>
