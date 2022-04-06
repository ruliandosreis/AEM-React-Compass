import styled from 'styled-components';

import UserIcon from '../../assets/images/userLoginImage.png'
import PasswordIcon from '../../assets/images/passwordLoginImage.png';

export const LoginFormContainer = styled.div`
  width: 100%;
  height: 350px;
`

export const LoginForm = styled.form`
  width: 100%;
`
 
export const InputLabel = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
`
export const LoginUserInput = styled.input`
  width:100%;
  margin: 15px auto;
  height: 60px;
  background: transparent url(${UserIcon}) no-repeat;
  background-position: 93% center;
  background-size: 20px;
  border-radius: 50px;
  box-sizing: border-box;
  border: 1px #FFFFFF solid;
  padding-left: 20px;
  font-size: 16px;
  line-height: 20px;
  color: white;
  font-family: 'Mark Pro';
  outline: none;
  &::placeholder{
    color: white;
  }
  &:focus{
    border: 1px solid #E9B425;
  }
  @media screen and (max-width: 1024px){
    width: 100%;
    margin: 15px 15px 15px 0;
  }
`

export const LoginPasswordInput = styled.input`
  width: 100%;
  margin: 15px auto;
  height: 60px;
  background: transparent url(${PasswordIcon}) no-repeat;
  background-position: 93% center;
  background-size: 20px;
  border-radius: 50px;
  box-sizing: border-box;
  border: 1px #FFFFFF solid;
  padding-left:20px;
  font-size: 16px;
  line-height: 20px;
  color: white;
  font-family: 'Mark Pro';
  outline: none;
  &::placeholder{
    color: white;
  }
  &:focus{
    border: 1px solid #E9B425;
  }
  @media screen and (max-width: 1024px){
    width: 100%;
    margin: 15px 15px 15px 0;
  }
`

export const LoginErrorMessageContainer = styled.div`
  width:100%;
  height:55px;
  background: transparent;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 1024px){
    background-color: transparent;
  }
`

export const ErrorMessage = styled.p`
  font-family: 'Mark Pro';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #E9B425;
`
