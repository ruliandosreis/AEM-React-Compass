import React from 'react'
import { 
  QuitButtonContainer,
  QuitButtonText
} from './style'

const QuitButton = ({text, fontSize}) => {
  return (
    <QuitButtonContainer>
      <QuitButtonText
      fontSize={`${fontSize}px`}
      >
        {text}
      </QuitButtonText>
    </QuitButtonContainer>
  )
}

export default QuitButton