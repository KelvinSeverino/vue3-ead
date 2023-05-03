//Mutations servem para alterar o estado antes de refletir para a tela reativa
const mutations = {
    ADD_MY_COURSES (state, myCourses) {
        state.myCourses = myCourses
    }
}

export default mutations