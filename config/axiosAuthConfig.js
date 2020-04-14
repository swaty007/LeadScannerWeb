import axios from 'axios'
const instance = axios.create({
  baseURL: '/',
  timeout: 10000000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': '*/*'
  },
  responseType: 'json'
})

export default instance
