import { getEnvVariables } from '@/helpers/getEnvVariables'
import axios from 'axios'

const {VITE_API_URL} = getEnvVariables()
// console.log(VITE_API_URL)

const creadoresAPI = axios.create({
    baseURL: VITE_API_URL
});

//* Interceptores
creadoresAPI.interceptors.request.use( config => {
    
    const token = localStorage.getItem('token');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export default creadoresAPI;