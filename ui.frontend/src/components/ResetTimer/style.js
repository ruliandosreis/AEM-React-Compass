import styled from "styled-components";
import { LogoutButtonContainer, LogoutButtonText } from "../LogoutButton/style";

export const ResetButtonContainer = styled(LogoutButtonContainer)`
    background: #FFFFFF;
    border: 0;
    margin-left: 86px;
    @media screen and (max-width: 1024px){
      margin-left: 23px;
  }
`

export const ResetButtonText = styled(LogoutButtonText)`
  font-family: 'Mark Pro';
  font-weight: 400;
  color: #C13216;
`