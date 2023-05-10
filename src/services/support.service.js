import BaseService from "./base.service"

export default class SupportService extends BaseService {

    static async getSupportsByLesson (lessonId) {
        //Retornando promise, que é uma estrutura de sucesso ou falha da funcao executada
        return new Promise((resolve, reject) => {
            //Executa instancia do base.service
            this.request({auth: true})
                .get('/supports', {
                    params: {lesson: lessonId} //Parametros enviados para API
                })
                .then(response => resolve(response.data)) //sucesso
                .catch(error => reject(error.response)) //falha
        })
    }

    static async createSupport (params) {
        //Retornando promise, que é uma estrutura de sucesso ou falha da funcao executada
        return new Promise((resolve, reject) => {
            //Executa instancia do base.service
            this.request({auth: true})
                .post('/supports', params)
                .then(response => resolve(response.data)) //sucesso
                .catch(error => reject(error.response)) //falha
        })
    }

    static async createReplySupport (params) {
        return new Promise((resolve, reject) => {
            this.request({auth: true})
                .post('/replies', params)
                .then(response => resolve(response.data)) //sucesso
                .catch(error => reject(error.response)) //falha
        })
    }
}