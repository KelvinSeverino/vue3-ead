//Usa o state para informar Propriedades que armazenam os dados recebidos da API
const state = {

    myCourses: [],

    courseSelected: {
        id: '',
        name: '',
        modules: []
    },

    lessonPlayer: {
        id: '',
        name: '',
        description: '',
        video: '',
        views: [],
    }
}

export default state