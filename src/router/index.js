import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/HomeView.vue'
import MySupports from '@/views/supports/MySupportsView.vue'

const routes = [
    {
        path: '/ead',
        component: () => import('@/layouts/DefaultTemplate.vue'),
        children: [
            {
                path: '',
                name: 'ead.home',
                component: Home,
            },            
            {
                path: 'minhas-duvidas',
                name: 'ead.mysupports',
                component: MySupports,
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
