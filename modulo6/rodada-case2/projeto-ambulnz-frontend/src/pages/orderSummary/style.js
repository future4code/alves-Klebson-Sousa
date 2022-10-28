import styled from "styled-components";

export const MainContainer = styled.main`
    width: 100vw;
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    /* overflow: auto; */
`
export const ContainerSection = styled.section`
    border: solid black 1px;
    margin-top: 2.5rem;
    width: 80%;
    padding: 3% 4%;
    /* height: auto; */
    display: flex;
    flex-direction: column;

    @media (min-width: 280px) and (max-width: 420px) {
        width: 90%;
    }

    @media (min-width: 620px) and (max-width: 980px) {
        height: 30%;
    }

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