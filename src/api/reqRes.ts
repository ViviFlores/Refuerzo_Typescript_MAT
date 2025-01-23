import axios from "axios";

//Constante que captura la conexión a la API
export const reqResApi = axios.create({
    baseURL:'https://reqres.in/api'
})