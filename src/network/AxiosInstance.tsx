import axios from 'axios'

export const AxiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com/products',
    timeout: 2000
})