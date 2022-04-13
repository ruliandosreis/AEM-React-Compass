import React from 'react'
import { 
  QuitButtonContainer,
  QuitButtonText
} from './style'

import { useHistory } from 'react-router-dom'

const QuitButton = ({text, fontSize}) => {

  const homeHistory = useHistory();

  return (
    <QuitButtonContainer onClick={() => homeHistory.push('/content/reactcompass/us/en/screenhome.html')}>
      <QuitButtonText
      fontSize={`${fontSize}px`}
      >
        {text}
      </QuitButtonText>
    </QuitButtonContainer>
  )
}

export default QuitButton