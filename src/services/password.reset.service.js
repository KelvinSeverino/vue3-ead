import BaseService from "./base.service"

export default class ResetPasswordService extends BaseService {

    static async forgetPassword (params) {
        return new Promise((resolve, reject) => {
            //Executa instancia do base.service
            this.request()
                .post('/forgot-password', params)
                .then(response => resolve(response)) //sucesso
                .catch(error => reject(error.response)) //falha
        })
    }
}