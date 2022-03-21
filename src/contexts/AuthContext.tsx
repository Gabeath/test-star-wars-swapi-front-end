import React, { createContext, useState } from 'react'
import Router from 'next/router'
import { setCookie } from 'nookies'

import { SignInRequestData, singInRequest } from '../services/auth'

type AuthContextType = {
  isAuthenticated: boolean
  signIn: (data: SignInRequestData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  async function signIn({ email, password }: SignInRequestData) {
    const { token } = await singInRequest({
      email,
      password
    })

    setCookie(undefined, 'sw_token', token, {
      maxAge: 60 * 60 * 5 // 5 hours
    })

    setIsAuthenticated(true)

    Router.push('/')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
