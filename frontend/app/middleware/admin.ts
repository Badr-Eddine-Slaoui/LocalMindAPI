import { useAuthStore } from '~~/stores/auth';


export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()
    
    if (!auth.role || auth.role !== 'ADMIN') {
        
        if (auth.role === 'user') {
            return navigateTo('/user', { replace: true })
        }

        return navigateTo('/login', { replace: true })
    }
})