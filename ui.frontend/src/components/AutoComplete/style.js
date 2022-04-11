import styled from "styled-components";

export const AutoCompleteContainer = styled.div`
    height: 400px;
    width: 400px;
    overflow-y: scroll;
    overflow-x: hidden;
    position: absolute;
    bottom: 13%;
    background-color: #CCC;
`;

export const AutoCompleteItem = styled.p`
    text-align: center;
    color: #000;
    font-family: 'Mark Pro';
    cursor: pointer;
`;