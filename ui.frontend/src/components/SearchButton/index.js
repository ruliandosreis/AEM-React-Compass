import React from 'react'
import { 
  SearchButtonContainer,
  SearchButtonText
} from './style'

const SearchButton = ({text, fontSize}) => {
  return (
    <SearchButtonContainer>
      <SearchButtonText
      fontSize={`${fontSize}px`}
      >
        {text}
      </SearchButtonText>
    </SearchButtonContainer>
  )
}

export default SearchButton