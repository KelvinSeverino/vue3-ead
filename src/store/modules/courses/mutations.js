//Mutations servem para alterar o estado antes de refletir para a tela reativa
const mutations = {
    //Adicionando os cursos na myCourses
    ADD_MY_COURSES (state, myCourses) {
        state.myCourses = myCourses
    },

    //Setando curso selecionado na propriedade courseSelected
    SET_COURSE_SELECTED (state, course) {
        state.courseSelected = course
    }
}

export default mutations