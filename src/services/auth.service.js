import BaseService from "./base.service"

export default class AuthService extends BaseService {

    static async auth (params) {
        //Retornando promise, que é uma estrutura de sucesso ou falha da funcao executada
        return new Promise((resolve, reject) => {
            //Executa instancia do base.service
            this.request()
                .post('/auth', params)
                .then(response => resolve(response)) //sucesso
                .catch(error => reject(error.response)) //falha
        })
    }
}