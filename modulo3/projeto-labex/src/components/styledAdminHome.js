import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    border: solid 1px black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    justify-content: space-between;
    :hover {
        cursor: pointer;
        background-color: lightblue;
    }
    button {
        :hover{
            cursor: pointer;
        background-color: #83b7c8;
        }
    }
`;
