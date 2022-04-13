import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
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

  const homeHistory = useHistory();

  const submitForm = (data) =>{data ? homeHistory.push('/content/reactcompass/us/en/screenhome.html') : console.log('não enviou')}

  const [userName, setUserName] = useState();
  const store = (key, value) => userName !== undefined && userName !== " " && localStorage.setItem(key, value);

  const userLocalData = localStorage.getItem('username');

  return (
    <LoginFormContainer>
      <LoginForm onSubmit={handleSubmit(submitForm)} id='login-form'>
        <InputLabel>
          <LoginUserInput type='text' name='userInput' placeholder='Usuário' {...register('user')} onChange={e => setUserName(e.target.value)} onBlurCapture={()=>store('username', userName)} defaultValue={userLocalData}/>
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