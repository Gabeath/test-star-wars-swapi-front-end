import React from 'react'
import { HiLockClosed } from 'react-icons/hi'

import { LoginContainer } from '../styles/pages/Login'

const Login = () => {
  return (
    <LoginContainer>
      <div className="main-div">
        <div>
          <div>
            <img
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
          </div>
          <form id="Login" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="form-group">
              <input
                id="inputEmail"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="form-control"
                placeholder="Endereço de e-mail"
              />
            </div>
            <div className="form-group">
              <input
                id="inputPassword"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="form-control"
                placeholder="Senha"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div>
              <button type="submit">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <HiLockClosed
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
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
