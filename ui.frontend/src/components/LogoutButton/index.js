import React from 'react'
import {
  LogoutButtonContainer,
  LogoutButtonText
} from './style'

const LogoutButton = ({text, fontSize}) => {
  return (
    <LogoutButtonContainer onClick={() => console.log("teste")}>
      <LogoutButtonText
      fontSize={`${fontSize}px`}
      >
      {text}
      </LogoutButtonText>
    </LogoutButtonContainer>
  )
}

export default LogoutButton