import styled from "styled-components";

export const QuitButtonContainer = styled.button`
  /* width: 380px; */
  width: 100%;
  height: 65px;
  padding: 10px;
  background: #FFFFFF;
  text-align: center;
  border-radius: 30px;
  border: none;
  cursor: pointer;
`

export const QuitButtonText = styled.span`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
  color: #000000;
`