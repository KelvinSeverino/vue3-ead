import BaseService from "./base.service"

export default class CourseService extends BaseService {

    static async getCourses (params) {
        //Retornando promise, que é uma estrutura de sucesso ou falha da funcao executada
        return new Promise((resolve, reject) => {
            //Executa instancia do base.service
            this.request({auth: true})
                .get('/courses', params)
                .then(response => resolve(response.data)) //sucesso
                .catch(error => reject(error.response)) //falha
        })
    }
}