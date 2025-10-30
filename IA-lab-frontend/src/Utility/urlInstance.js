import axios from 'axios'

let axiosInstance = axios.create({
    // baseURL:"https://ia-lab-backend.onrender.com/api"
    baseURL:"http://localhost:6388/api" 
    
})
export {axiosInstance}
