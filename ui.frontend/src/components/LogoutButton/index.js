import React from 'react'
import {useHistory} from 'react-router-dom'
import {
  LogoutButtonContainer,
  LogoutButtonText
} from './style'

const LogoutButton = ({text, fontSize}) => {

  const loginHistory = useHistory();

  return (
    <LogoutButtonContainer onClick={() => loginHistory.push('/content/reactcompass/us/en/screenlogin.html')}>
      <LogoutButtonText
      fontSize={`${fontSize}px`}
      >
      {text}
      </LogoutButtonText>
    </LogoutButtonContainer>
  )
}

export default LogoutButton