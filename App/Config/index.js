import {create} from 'apisauce';

const API_URL = 'http://192.168.0.98:3000/api/v1/'
const AppConfig = {
  API_URL: API_URL,
}

const userApiClient = create({
  baseURL: API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

export { userApiClient as default, AppConfig }
