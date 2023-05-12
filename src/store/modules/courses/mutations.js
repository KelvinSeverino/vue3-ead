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

    //Marca aula visualizada
    ADD_NEW_VIEW_LESSON (state) {
        const modules = state.courseSelected.modules

        modules.forEach((module, indexModule) => {
            module.lessons.forEach((lesson, indexLesson) => {
                if (lesson.id === state.lessonPlayer.id) {
                    modules[indexModule].lessons[indexLesson].views.push({})
                }
            });
        });
    }
}

export default mutations