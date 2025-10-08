export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token')

  // daftar halaman publik yang bisa diakses tanpa login
  const publicPages = ['/login']

  if (!token.value && !publicPages.includes(to.path)) {
    return navigateTo('/login')
  }

  // kalau sudah login dan coba ke halaman login, redirect ke dashboard
  if (token.value && to.path === '/login') {
    return navigateTo('/dashboard')
  }
})
