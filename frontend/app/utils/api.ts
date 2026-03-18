// frontend/app/utils/api.ts
import { useAuthStore } from '~~/stores/auth'

export const useApi = () => {
    const config = useRuntimeConfig()
    const auth = useAuthStore()

    return $fetch.create({
        baseURL: config.public.apiBase,

        onRequest({ options }) {
            options.headers = new Headers(options.headers)
            options.headers.set('Accept', 'application/json')
            options.headers.set('Content-Type', 'application/json')
            options.headers.set('Access-Control-Allow-Origin', '*')

            if (auth.token) {
                options.headers.set('Authorization', `Bearer ${auth.token}`)
            }
        },
    })
}