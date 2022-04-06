import React from 'react';
import {
  LoginFormContainer,
  LoginForm,
  InputLabel,
  LoginUserInput,
  LoginPasswordInput,
  LoginErrorMessageContainer,
  ErrorMessage
} from './style'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../Validations/LoginValidation.js';

const LoginFormComponent = ({teste}) => {

  const { handleSubmit, register, formState: { errors } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const submitForm = (data) =>{data ? console.log('enviou') : console.log('não enviou')}

  return (
    <LoginFormContainer>
      <LoginForm onSubmit={handleSubmit(submitForm)} id='login-form'>
        <InputLabel>
          <LoginUserInput type='text' name='userInput' placeholder='Usuário' {...register('user')}/>
        </InputLabel>
        <InputLabel>
          <LoginPasswordInput type='password' name='passwordInput' placeholder='Senha' {...register('password')}/>
        </InputLabel>
      </LoginForm>
      <LoginErrorMessageContainer>
        <ErrorMessage id='error-message'>{errors.user?.message}</ErrorMessage>
        <ErrorMessage id='error-message'>{errors.password?.message}</ErrorMessage>
      </LoginErrorMessageContainer>
    </LoginFormContainer>
  )
}

export default LoginFormComponent;