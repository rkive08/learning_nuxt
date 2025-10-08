export const useAuth = () => {
  const token = useCookie('token') // atau localStorage kalau kamu mau

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()

      if (res.ok) {
        token.value = data.token // simpan token
        return { success: true }
      } else {
        return { success: false, message: data.error || 'Login failed' }
      }
    } catch (err) {
      return { success: false, message: 'Server error' }
    }
  }

  const logout = () => {
    token.value = null // hapus token
    navigateTo('/login') // arahkan ke halaman login
  }

  return { login, logout, token }
}
