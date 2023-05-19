import SupportService from '@/services/support.service'

const actions = {
    getSupportsOfLesson ({commit}, lessonId) {
        return SupportService.getSupportsByLesson(lessonId)
                                .then(supports => commit('SET_SUPPORTS', supports)) //Setando os suportes que vieram da API

    },

    storeSupport ({commit}, params) {
        return SupportService.createSupport(params)
                                .then(response => commit('ADD_NEW_SUPPORT', response.data)) //Setando o suporte que retornou da API
    },

    storeReplyToSupport ({commit}, params) {
        return SupportService.createReplySupport(params)
                                .then(response => {
                                    const data = {
                                        reply: response.data,
                                        supportId: params.support
                                    }
                                    commit('ADD_NEW_REPLY_TO_SUPPORT', data)
                                }) //Setando o suporte que retornou da API
    },

    getMySupports ({commit}, params) {
        return SupportService.getMySupports(params)
                                .then(response => commit('SET_SUPPORTS', response)) //Setando o suporte que retornou da API
    },
}

export default actions