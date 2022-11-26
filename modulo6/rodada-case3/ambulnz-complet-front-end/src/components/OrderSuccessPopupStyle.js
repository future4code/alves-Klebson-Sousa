import styled from "styled-components";

export const ContainerDiv = styled.div`
    border: solid black 1px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35%;
    background-color: white;
    padding: 5px;

    @media (min-width: 280px) and (max-width: 420px) {
        width: 90%;
    }
    @media (min-width: 421px) and (max-width: 680px) {
        width: 70%;
    }
    @media (min-width: 681px) and (max-width: 980px) {
        width: 55%;
        font-size: 1.5rem;
    }

    > div {
        position: relative;
        width: 100%;
        height: 100%;

        p {
            margin-top: 10px;
            color: #4d4c4c;
            font-family: sans-serif;
        }

        .close-popup {
            position: absolute;
            top: 0;
            left: 100%;
            transform: translateX(-100%);
            padding: 2px 5px;
            border: solid black 1px;
            width: auto;
            border: none;

            :hover {
                cursor: pointer;
                font-size: 1.5rem;
                font-weight: bold;
                background-color: lightgray;
            }
        }
    }
`