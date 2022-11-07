import { TextField } from "@mui/material"
import styled from "styled-components"

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem;
`

export const Main = styled.div`
    padding: 0.625rem;
    width: 30%;
    min-width: 360px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center; 
    border: solid lightgray 1px;
    border-radius: 0.625rem;
   
   h2 {
    text-align: center;
   }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 19.375rem;
  height: 80%;
  justify-content: space-evenly;
  gap: 10px;
`;

export const ShowInput = styled(TextField)`
    width: 100%;
`