const mutations = {
    SET_SUPPORTS (state, supports) {
        //state.supports = supports
        state.supports = Object.assign({}, state.supports, supports) //Mesclando objetos supports
    },
    
    SET_RESET_SUPPORTS (state) {
        state.supports = {
            data: [],
            meta: {
                total: 0,
                page: 0,
                last_page: 0
            }
        }
    },
    
    ADD_NEW_SUPPORTS (state, support) {
        state.supports.data.unshift(support)
    },
}

export default mutations