import { ref } from 'vue'

export function useForgotPassword() {
  const loading = ref(false)
  const message = ref('')
  const error = ref('')

  const sendResetLink = async (email: string) => {
    loading.value = true
    message.value = ''
    error.value = ''

    try {
      const res = await fetch('http://localhost:8080/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        message.value = data.message
      } else {
        error.value = data.error || 'Failed to send email'
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
    sendResetLink,
  }
}
