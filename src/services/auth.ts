import { api } from './api'

export type SignInRequestData = {
  email: string
  password: string
}

export async function singInRequest(signInData: SignInRequestData) {
  const { data } = await api.post('/login', signInData)

  return data as { token: string }
}
