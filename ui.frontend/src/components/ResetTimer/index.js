import React from 'react'
import { ResetButtonContainer, ResetButtonText } from './style'

const ResetTimer = ({ text, fontSize}) => {

    return (
        <ResetButtonContainer>
            <ResetButtonText
                fontSize={`${fontSize}px`}
            >
                {text}
            </ResetButtonText>
        </ResetButtonContainer>
    )
}

export default ResetTimer;