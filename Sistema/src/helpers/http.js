import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import axiosCancel from 'axios-cancel'
import session from './session'

const http = axios.create({
  baseURL: 'http://localhost:8000/'
})

axiosCancel(http)

Vue.use(VueAxios, http)

http.interceptors.request.use((config) => {
  if(session.exists()) {
    config.headers['Authorization'] = `Bearer ${session.get('token')}`
  }

  if(!config.url) {
    config.url = '/'
  }

  return config
}, error => {
  return Promise.reject(error)
})

export default http
