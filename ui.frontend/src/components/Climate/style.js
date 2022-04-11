import styled from 'styled-components';

export const ClimateStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 160px;

    span{
        font-size: 16px;
        color: #222222;
        font-weight: 400;
        font-family: 'Mark Pro';
    }

    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding: 0 5px;
        margin-top: 5px;
    
        img {
            width: 60px;
            height: 60px;
            margin-bottom: 5px;
        }

        h1{
            font-family: 'Mark Pro';
            font-weight: bold;
            font-size: 48px;
            color: #222222;
            letter-spacing: normal;
        }
    }

    @media (max-width: 400px) {
        p {
            font-size: 12px;
        }

        h1 {
            font-size: 30px;
        }
    }
`;