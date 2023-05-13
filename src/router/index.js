import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/HomeView.vue'
import MySupports from '@/views/supports/MySupportsView.vue'
import ModulesAndLessons from '@/views/modules/ModulesAndLessonsView.vue'
import AuthView from '@/views/auth/AuthView.vue'
import ForgetPasswordView from '@/views/auth/ForgetPasswordView.vue'
import ResetPasswordView from '@/views/auth/ResetPasswordView.vue'

import store from '@/store'
import { TOKEN_NAME } from "@/configs"

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
            },         
            {
                path: 'modulos',
                name: 'ead.modules',
                component: ModulesAndLessons,
            },
        ]
    },
    {
        path: '/',
        name: 'auth',
        component: AuthView
    },
    {
        path: '/recuperar-senha',
        name: 'forget.password',
        component: ForgetPasswordView
    },
    {
        path: '/reset/:token',
        name: 'reset.password',
        component: ResetPasswordView,
        props: true,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach(async (to) => {
    const loggedIn = store.state.users.loggedIn

    //Verifica se nao esta na pagina de Reset Senha e nao possui Status de Logado
    if (to.name != 'reset.password' && !loggedIn) {
        const token = await localStorage.getItem(TOKEN_NAME)
        
        //Verifica se nao esta nas paginas de Login e Recupera-Senha
        if (!token && to.name != 'auth' && to.name != 'forgot.password') {
            return router.push({name: 'auth'})
        }

        await store.dispatch('getUserAuth')
                    .catch(() => {
                        if(to.name != 'auth') return router.push({name: 'auth'})
                    })
    } 
})

export default router
