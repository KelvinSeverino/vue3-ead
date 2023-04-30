import Http from "./http.init"

export default class BaseService {
    constructor() {
        this.instance = new BaseService
    }

    static request (status = { auth: false }) { //Recebe param do tipo auth com valor padrao false
        return new Http(status)
    }
}