import axios from 'axios'

const http = axios.create({
    baseURL: 'http://192.168.42.237:8000'
})

export default http