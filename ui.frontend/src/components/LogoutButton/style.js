import styled from "styled-components";

export const LogoutButtonContainer = styled.button`
  width: 130px;
  height: 100px;
  padding: 20px;
  cursor: pointer;
  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
  text-align: center;
  @media screen and (max-width: 1024px){
    width: 100px;
  }
`

export const LogoutButtonText = styled.span`
  font-family: 'Mark Pro';
  font-weight: 700;
  font-size: ${(props) => props.fontSize};
  color: white;
`