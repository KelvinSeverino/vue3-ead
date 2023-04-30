import BaseService from "./base.service"

export default class AuthService extends BaseService {

    static async auth (params) {
        return this.request()
                    .post('/auth', params)
    }
}