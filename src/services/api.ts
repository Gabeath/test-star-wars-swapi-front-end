import axios from 'axios'
import { parseCookies } from 'nookies'

const { sw_token: token } = parseCookies()

export const api = axios.create({
  baseURL: 'https://test-star-wars-swapi-api.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    Accept: 'application/json'
  }
})

if (token) {
  // eslint-disable-next-line dot-notation
  api.defaults.headers['Authorization'] = `Bearer ${token}`
}
