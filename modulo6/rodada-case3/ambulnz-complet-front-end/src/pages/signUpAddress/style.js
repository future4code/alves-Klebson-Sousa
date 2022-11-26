import { ButtonBase, TextField } from "@mui/material"
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
    margin-top: 10px;
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
export const ButtonStyled = styled(ButtonBase)`
  && {
    width: 100%;
    padding: 10px;
    font-size: 1.5rem;
    background: red;
    cursor: pointer;
    border-radius: 0.938rem;
    :hover {
      border-radius: 0.938rem;
      color: white;
      box-shadow: rgb(208, 4, 4) 0px 0px 20px 0px;
      -webkit-box-shadow: rgb(208, 4, 4) 0px 0px 20px 0px;
      -moz-box-shadow: rgb(208, 4, 4) 0px 0px 20px 0px;
    }

    :active {
      position: relative;
      top: 5px;
    }
  }
`;