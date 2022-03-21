import { HiLockClosed } from 'react-icons/hi'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { AuthContext } from '../contexts/AuthContext'
import { LoginContainer } from '../styles/pages/Login'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data) {
    await signIn(data)
  }

  return (
    <LoginContainer>
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
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </LoginContainer>
  )
}

export default Login
