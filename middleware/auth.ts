import { useCookie } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token')
  if (token.value && to?.name === 'auth-login') {
    return navigateTo('/')
  }
  if (!token.value && to?.name === 'auth-login') {
    return
  }
  if (!token.value && to?.name !== 'auth-login') {
    return navigateTo('/auth/login')
  }
})
