import { createStore } from 'vuex'

import users from './modules/users/'
import courses from './modules/courses/'

export default createStore({
    state: { //Dados que serao guardados
    },
    getters: { 
    },
    mutations: { //Muda os dados que serao guardados
    },
    actions: { //Metodos que gerao acao no projeto
    },
    modules: { //Organiza projeto em modulos
        users,
        courses
    }
})
