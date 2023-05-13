import AuthService from '@/services/auth.service'
import ResetPasswordService from '@/services/password.reset.service'

export default {
    state: { //Dados que serao guardados
        user: {
            name: '',
            email: '',
        },
        loggedIn: false, //Informa se user esta logado
    },

    mutations: { //Metodos para alterar dados antes de guarda-los
        SET_USER (state, userInput) {
            state.user = userInput
            state.loggedIn = true
        },
        LOGOUT (state) {            
            state.user = {
                name: '',
                email: '',
            },
            state.loggedIn = false
        }
    },

    actions: { //Executa metodos Services para comunicar com API
        auth ({ dispatch }, params) {
            return AuthService.auth(params)
                                .then(() => dispatch('getUserAuth'))
        },
        
        getUserAuth ({ commit }) {
            commit('CHANGE_LOADING', true)

            AuthService.getUserAuth()
                        .then(user => commit('SET_USER', user)) //Seta o user retornado da API
                        .finally(() => commit('CHANGE_LOADING', false))
        },

        forgetPassword (_, params) {
            return ResetPasswordService.forgetPassword(params)
        },

        logout ({ commit }) {            
            commit('CHANGE_LOADING', true) //Pre-Loader

            return AuthService.logout()
                                .then(() => commit('LOGOUT'))
                                .finally(() => commit('CHANGE_LOADING', false))
        }
    },
}