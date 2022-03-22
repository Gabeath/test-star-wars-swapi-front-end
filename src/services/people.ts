/* eslint-disable camelcase */
import { api } from './api'

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

export async function getPeople(pageNumber: number) {
  const { data } = await api.get('/people', {
    params: { page: pageNumber }
  })

  return data as { results: Person[]; count: number }
}
