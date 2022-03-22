import { HiLockClosed } from 'react-icons/hi'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import Router from 'next/router'

import { AuthContext } from '../contexts/AuthContext'
import { FormContainer } from '../styles/form'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data) {
    await signIn(data)
  }

  return (
    <FormContainer>
      <div className="main-div">
        <div>
          <div>
            <img
              src="	https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
              alt="Workflow"
            />
          </div>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div>
              <input
                {...register('email')}
                id="inputEmail"
                name="email"
                type="email"
                required
                placeholder="Endereço de e-mail"
              />
            </div>
            <div>
              <input
                {...register('password')}
                id="inputPassword"
                name="password"
                type="password"
                required
                placeholder="Senha"
              />
            </div>

            <div>
              <button type="submit">
                <span>
                  <HiLockClosed />
                </span>
                Entrar
              </button>
            </div>
          </form>
          <div>
            <button onClick={() => Router.push('/create-user')}>
              Criar nova conta
            </button>
          </div>
        </div>
      </div>
    </FormContainer>
  )
}

export default Login
