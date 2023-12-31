import axios from 'axios'


const api = axios.create({
    baseURL:"https://desafio-yuriramos-api.vercel.app"
})

export default api;