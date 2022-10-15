import styled from "styled-components"

export const ContainerSection = styled.section`
    width: 23em;
    border: solid black 1px;
    display: flex;
    flex-direction:column;
`

export const DivTitle = styled.div`
padding: 10px;
    display: grid;
    grid-template-columns: 24px 1fr 24px;
    width: 100%;        
    button {
        background-color: transparent;
        border: none;
        font-size: 2em;
        ;
    }
    
`
export const TitleOrder = styled.h2`
    text-align: center;
    font-size: 1.5em;
`
export const TotalOrder = styled.h2`
    font-size: 1.5em;
    padding: 10px;
`
export const ButtonFinish = styled.button`
    font-size: 1em;
    padding: 7px;
    width: 13em;
`