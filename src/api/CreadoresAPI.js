import { getEnvVariables } from '@/helpers/getEnvVariables'
import axios from 'axios'

const {VITE_API_URL} = getEnvVariables()
// console.log(VITE_API_URL)

const creadoresAPI = axios.create({
    baseURL: VITE_API_URL
});

//! Interceptores


export default creadoresAPI;