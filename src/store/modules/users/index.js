export default {
    state: {
        user: {
            name: '',
            email: '',
        },
        loggedIn: false, //Informa se user esta logado
    },

    mutations: {
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

    actions: {
    },
}