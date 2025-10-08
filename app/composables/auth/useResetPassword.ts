import { ref } from 'vue'

export function useResetPassword() {
  const loading = ref(false)
  const message = ref('')
  const error = ref('')

  const resetPassword = async (token: string, newPassword: string) => {
    loading.value = true
    message.value = ''
    error.value = ''

    try {
      const res = await fetch('http://localhost:8080/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: token,
          new_password: newPassword,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        message.value = data.message
      } else {
        error.value = data.error || 'Failed to reset password'
      }
    } catch (err) {
      error.value = 'Server error'
    }

    loading.value = false
  }

  return {
    loading,
    message,
    error,
    resetPassword,
  }
}
