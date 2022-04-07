import styled from "styled-components";

export const LoginButton = styled.button`
  width: 100%;
  background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
  height: 65px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 5px 5px 15px 0px #00000026 inset;
`

export const LoginButtonText = styled.span`
  font-family: 'Mark Pro';
  font-weight: 700;
  font-size: ${(props) => props.fontSize};
  color: white;
`