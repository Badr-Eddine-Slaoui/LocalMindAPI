import { useAuthStore } from '~~/stores/auth'

export default defineNuxtRouteMiddleware((to) => {
    const auth = useAuthStore()

    if (!auth.isLoggedIn || auth.checkTockenExpiration() || !auth.token) return

    switch (auth.role) {
        case 'admin':
            return navigateTo('/admin', { replace: true })
        case 'user':
            return navigateTo('/user', { replace: true })
    }
})
