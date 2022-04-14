import styled from "styled-components";

export const TimerContainer = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TimerArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;

    span {
        flex: 1;
        font-size: 14px;
        text-align: right;
        font-family: 'Mark Pro';
        color: #FFFFFF;
        line-height: 18px;
    }
    
    div {
        flex: 1;
        text-align: center;
        margin-left: 14%;
        
        p {
            font-family: 'Roboto';
            font-size: 48px;
            color: #FFFFFF;
            @media (max-width: 1600px) {
                font-size: 32px;
            }
        }
    }

    @media (max-width: 1023px) {
        display: none;
    }
`;
