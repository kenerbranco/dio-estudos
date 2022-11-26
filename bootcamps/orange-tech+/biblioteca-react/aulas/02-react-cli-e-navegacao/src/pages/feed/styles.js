import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 40px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.h3`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-weight: 25px;
    margin-bottom: 15px;
    color: #ffffff;
`

export const TitleHighLight = styled.span`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-weight: 25px;
    margin-bottom: 24px;
    color: #ffffff70;
`

export const Column = styled.div`
    flex: ${({flex}) => flex}; /* Peso do flex, deixar coluna à equerda com tamanho maior */
    padding-right: 24px;
    margin-left: 15px;
`