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

    static async getUserAuth () {
        const token = await localStorage.getItem(TOKEN_NAME)

        if (!token) {
            return Promise.reject('Token Not Found')
        }
        
        return new Promise((resolve, reject) => {
            this.request({auth: true})
                .get('/me')
                .catch(error => {
                    localStorage.removeItem(TOKEN_NAME)
                    reject(error.response)
                })
        })
    }
}