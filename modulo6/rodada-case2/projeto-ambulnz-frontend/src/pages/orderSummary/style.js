import styled from "styled-components";

export const MainContainer = styled.main`
    border: solid green 1px;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`
export const ContainerSection = styled.section`
    border: solid black 1px;
    margin-top: 2.5rem;
    width: 80%;
    padding: 3% 4%;
    height: 40%;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 1.5rem;
        text-align: center;
    }

    h2 {
        text-align: end;
    }

    button {
        margin-top: 2%;
    }
`