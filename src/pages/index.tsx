import Head from 'next/head'
import React from 'react'
import Router from 'next/router'

import DarthVaderIcon from '../assets/darth-vader.svg'
import { Container } from '../styles/pages/Home'

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <DarthVaderIcon />
      <h1>Você não conhece o poder do lado sombrio</h1>
      <p>
        Você está controlando seu medo... agora libere a sua raiva. Só o seu
        ódio poderá destruir-me
      </p>
      <div>
        <button onClick={() => Router.push('/login')}>Continuar</button>
      </div>
    </Container>
  )
}

export default Home
