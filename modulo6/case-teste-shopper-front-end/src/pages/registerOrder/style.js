import styled from "styled-components";
import { TextField } from "@mui/material"
import { Button } from "@mui/material";

export const InputMaterial = styled(TextField)`
    width: 100%;
`

export const Main = styled.div`
    padding: 10px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    p {
        margin: 20px;
        font-size: 1rem;
        color: #666;
    }
`
export const Form = styled.form`    
    display: flex;
    flex-direction: column;
    height: 30%;
    justify-content: space-evenly;
    width: 40%;
    gap: 10px;
    margin-top: 20px;
`

export const ButtonStyled =styled(Button)`
    &&{
        background-color: rgb(45, 167, 122);
        color: #666;
        width: 100%;

    }
`