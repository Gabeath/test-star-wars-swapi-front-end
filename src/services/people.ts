/* eslint-disable camelcase */
import { message } from 'react-message-popup'
import Router from 'next/router'

import { api } from './api'
import { ErrorMessages } from '../utils/error-messages'

export type Person = {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
}

async function getPeopleRequest(pageNumber: number) {
  const { data } = await api.get('/people', {
    params: { page: pageNumber }
  })

  return data as { results: Person[]; count: number }
}

export async function getPeople(pageNumber: number) {
  try {
    const response = await getPeopleRequest(pageNumber)
    return response
  } catch (err) {
    if (err?.response?.status === 401) {
      message.error(ErrorMessages.unauthorized)
      Router.push('/login')
    } else {
      message.error(
        ErrorMessages[err?.response?.data?.error] || 'Erro genérico'
      )
    }
  }
}
