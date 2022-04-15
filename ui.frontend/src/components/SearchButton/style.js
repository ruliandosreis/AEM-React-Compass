import styled from "styled-components";

export const SearchButtonContainer = styled.button`
  /* width: 380px; */
  width: 100%;
  height: 65px;
  padding: 10px;
  background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  text-align: center;
  border-radius: 50px;
  border: none;
  cursor: pointer;
`

export const SearchButtonText = styled.span`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
  color: #FFFFFF;
`