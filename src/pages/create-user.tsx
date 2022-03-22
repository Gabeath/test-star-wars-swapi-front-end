import React from 'react'
import { useForm } from 'react-hook-form'

import { FormContainer } from '../styles/form'
import { createUser } from '../services/user'

const CreateUser = () => {
  const { register, handleSubmit } = useForm()

  async function handleCreateUser(data) {
    await createUser(data)
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
          <form onSubmit={handleSubmit(handleCreateUser)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div>
              <input
                {...register('name')}
                id="inputName"
                name="name"
                type="text"
                required
                placeholder="Nome"
              />
            </div>
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
                {...register('phone')}
                id="inputPhone"
                name="phone"
                type="text"
                required
                placeholder="Telefone"
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
              <button type="submit">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </FormContainer>
  )
}

export default CreateUser
