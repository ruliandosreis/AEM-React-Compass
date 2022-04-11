import styled from "styled-components";
import UserIcon from '../../assets/images/userLoginImage.png'

export const InputSearchContainer = styled.input`
    background-color: transparent;
    border: 1px solid white;
    box-sizing: border-box;
    border-radius: 50px;
    padding: 12px 50px;
    width: 100%;
    outline: 0;

    font-family: 'Roboto';
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;

    background-image: url(${UserIcon});
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: left 20px center;

    ::placeholder{
        color: white;
        font-family: 'Roboto';
    }
    :focus{
        border: 1px solid #E9B425;
    }
`;