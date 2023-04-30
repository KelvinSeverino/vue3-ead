import BaseService from "./base.service"
import { TOKEN_NAME } from "@/configs"

export default class AuthService extends BaseService {

    static async auth (params) {
        //Retornando promise, que é uma estrutura de sucesso ou falha da funcao executada
        return new Promise((resolve, reject) => {
            //Executa instancia do base.service
            this.request()
                .post('/auth', params)
                .then(response => {
                    localStorage.setItem(TOKEN_NAME, response.data.token)
                    resolve(response)
                }) //sucesso
                .catch(error => {
                    console.log(error.response)
                    reject(error.response)
                }) //falha
        })
    }
}