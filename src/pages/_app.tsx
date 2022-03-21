import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '../contexts/AuthContext'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
