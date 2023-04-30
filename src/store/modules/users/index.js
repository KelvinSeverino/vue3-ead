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
        auth ({ state }, params) {
            state.loggedIn
            return AuthService.auth(params)
        },

        forgetPassword ({ state }, params) {
            state.loggedIn
            return ResetPasswordService.forgetPassword(params)
        },
    },
}