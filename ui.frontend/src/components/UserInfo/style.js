import styled from "styled-components";

export const UserInfoContainer = styled.div`
    width: 100%;
    height: 300px;
    white-space: pre-line;
    display: flex;
    justify-content: center;

    p {
        font-family: 'Roboto';
        font-size: clamp(20px,3.5vw,25px);
        text-align: left;
        color: #fff; 
    }
`