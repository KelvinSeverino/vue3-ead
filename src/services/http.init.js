import axios from "axios";

import { URL_API, TOKEN_NAME } from '@/configs'

export default class Http {
    constructor(status) {
        //Cria um Token no localStorage do Navegador
        const token = localStorage.getItem(TOKEN_NAME)

        //Cabecalho com o token de autenticacao da API
        const headers = status.auth ? {
            Authorization: `Bearer ${token}`
        } : {}

        //Adicionando a instancia dados do Axios
        this.instance = axios.create({
            baseURL: URL_API,
            headers: headers
        })

        return this.instance
    }
}