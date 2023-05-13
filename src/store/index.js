import { createStore } from 'vuex'

import users from './modules/users/'
import courses from './modules/courses/'
import supports from './modules/supports/'

export default createStore({
    state: { //Dados que serao guardados de maneira GLOBAL
        loading: false,
        loadingMessage: 'Carregando... aguarde!'
    },
    getters: { 
    },
    mutations: { //Muda os dados que serao guardados de maneira GLOBAL
        CHANGE_LOADING (state, status, msg) {
            state.loading = status
            state.loadingMessage = msg
        }
    },
    actions: { //Metodos que gerao acao no projeto de maneira GLOBAL
    },
    modules: { //Organiza projeto em modulos de maneira GLOBAL
        users,
        courses,
        supports
    }
})
