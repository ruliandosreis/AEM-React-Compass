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

const LoginFormComponent = ({teste}) => {
  return (
    <LoginFormContainer>
      <LoginForm onSubmit={console.log('testei o envio')}>
        <InputLabel>
          <LoginUserInput type='text' name='userInput' placeholder='Usuário'/>
        </InputLabel>
        <InputLabel>
          <LoginPasswordInput type='password' name='passwordInput' placeholder='Senha'/>
        </InputLabel>
      </LoginForm>
      <LoginErrorMessageContainer>
        <ErrorMessage id='error-message'>testing error message for unvalid user</ErrorMessage>
        <ErrorMessage id='error-message'>testing error message for unvalid password</ErrorMessage>
      </LoginErrorMessageContainer>
    </LoginFormContainer>
  )
}

export default LoginFormComponent;