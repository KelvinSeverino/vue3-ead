import CourseService from '@/services/course.service'

const actions = {
    getCourses({commit}) {
        CourseService.getCourses()
                        .then(response => commit('ADD_MY_COURSES', response.data)) //retorna objeto data da API para mutation ADD_MY_COURSES
    },

    markLessonViewed ({commit, state}) {
        CourseService.markLessonViewed(state.lessonPlayer.id)
                        .then(() => commit('ADD_NEW_VIEW_LESSON')) //envia ID da aula para mutation ADD_NEW_VIEW_LESSON
    }
}

export default actions