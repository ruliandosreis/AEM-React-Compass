import React from 'react'
import { CustomMarginContainer } from './style'

const CustomMargin = ({margin}) => <CustomMarginContainer margin={`${margin}px`} data-testid='custom-margin'></CustomMarginContainer>

export default CustomMargin