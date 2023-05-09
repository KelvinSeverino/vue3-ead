import SupportService from '@/services/support.service'

const actions = {
    getSupportsOfLesson ({commit}, lessonId) {
        return SupportService.getSupportsByLesson(lessonId)
                                .then(supports => commit('SET_SUPPORTS', supports)) //Setando os suportes que vieram da API

    },

    storeSupport ({commit}, params) {
        return SupportService.createSupport(params)
                                .then(response => commit('ADD_NEW_SUPPORT', response.data)) //Setando o suporte que retornou da API
    }
}

export default actions