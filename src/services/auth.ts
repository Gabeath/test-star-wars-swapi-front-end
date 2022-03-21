import axios, { AxiosInstance } from 'axios'

const getInstance = (): AxiosInstance =>
  axios.create({
    baseURL: 'https://test-star-wars-swapi-api.herokuapp.com/api',
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      Accept: 'application/json'
    }
  })

export type SignInRequestData = {
  email: string
  password: string
}

export async function singInRequest(signInData: SignInRequestData) {
  const { data } = await getInstance().post('/login', signInData)

  return data as { token: string }
}
