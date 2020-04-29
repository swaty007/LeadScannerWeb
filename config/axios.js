import axios from 'axios'
import { BACKEND_ORIGIN } from '../.env'

const instance = axios.create({
  baseURL: BACKEND_ORIGIN,
  timeout: 10000000,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
})
export default instance
