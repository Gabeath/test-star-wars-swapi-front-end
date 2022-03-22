import Router from 'next/router'
import { setCookie } from 'nookies'

import { api } from './api'

export type User = {
  name: string
  email: string
  phone: string
  password: string
}

async function createUserRequest(userToCreate: User) {
  const { data } = await api.post('/user', userToCreate)

  return data as { token: string }
}

export async function createUser(userToCreate: User) {
  const { token } = await createUserRequest(userToCreate)

  setCookie(undefined, 'sw_token', token, {
    maxAge: 60 * 60 * 5 // 5 hours
  })

  // eslint-disable-next-line dot-notation
  api.defaults.headers['Authorization'] = `Bearer ${token}`

  Router.push('/people')
}
