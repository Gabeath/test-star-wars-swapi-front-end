import { message } from 'react-message-popup'
import React, { createContext, useEffect, useState } from 'react'
import Router from 'next/router'
import { setCookie, parseCookies } from 'nookies'

import { api } from '../services/api'
import { ErrorMessages } from '../utils/error-messages'
import { SignInRequestData, singInRequest } from '../services/auth'

type AuthContextType = {
  isAuthenticated: boolean
  signIn: (data: SignInRequestData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    const { sw_token: token } = parseCookies()

    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  async function signIn({ email, password }: SignInRequestData) {
    try {
      const { token } = await singInRequest({
        email,
        password
      })

      setCookie(undefined, 'sw_token', token, {
        maxAge: 60 * 60 * 5 // 5 hours
      })

      // eslint-disable-next-line dot-notation
      api.defaults.headers['Authorization'] = `Bearer ${token}`

      setIsAuthenticated(true)

      Router.push('/people')
    } catch (err) {
      message.error(
        ErrorMessages[err?.response?.data?.error] || 'Erro genérico'
      )
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
