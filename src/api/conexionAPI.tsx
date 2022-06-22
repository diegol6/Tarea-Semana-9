import axios from "axios";

export const conexionAPI = axios.create({
    baseURL : 'https://www.thesportsdb.com/api'
});
