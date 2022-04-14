import styled from "styled-components";

export const LogoutButtonContainer = styled.button`
  width: 100%;
  max-width: 130px;
  height: 15vh;
  padding: 20px;
  cursor: pointer;
  background: transparent;
  border: 0;
  text-align: center;
  /* @media screen and (max-width: 1024px){
    width: 100px;
  } */
`

export const LogoutButtonText = styled.span`
  font-family: 'Mark Pro';
  font-weight: 700;
  font-size: ${(props) => props.fontSize};
  color: white;
`