//Mutations servem para alterar o estado antes de refletir para a tela reativa
const mutations = {
    //Adicionando os cursos na myCourses
    ADD_MY_COURSES (state, myCourses) {
        state.myCourses = myCourses
    },

    //Setando curso selecionado na propriedade courseSelected
    SET_COURSE_SELECTED (state, course) {
        state.courseSelected = course
    },

    //Setando a aula selecionada para carregar o Player de Video
    SET_LESSON_PLAYER (state, lesson) {
        state.lessonPlayer = lesson
    },
    
    //Removendo a aula selecionada para carregar o Player de Video
    REMOVE_LESSON_PLAYER (state) {
        state.lessonPlayer = {            
            id: '',
            name: '',
            description: '',
            video: '',
            views: [],
        }
    },
}

export default mutations