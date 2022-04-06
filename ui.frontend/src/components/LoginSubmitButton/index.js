import React from 'react'

import { 
  LoginButton,
  LoginButtonText
} from './style'

const LoginSubmitButton = ({text, fontSize}) => {
  return (
    <LoginButton type='submit' form='login-form'>
      <LoginButtonText
      fontSize={`${fontSize}px`}
      >{text}
      </LoginButtonText>
    </LoginButton>
  )
}

export default LoginSubmitButton