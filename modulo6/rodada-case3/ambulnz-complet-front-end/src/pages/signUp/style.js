import styled from "styled-components";
import { ButtonBase, IconButton, TextField } from "@mui/material";
import PizzasHome from "../../assets/Pizza_with_olive_and_onion.jpg";

export const ShowButton = styled(IconButton)`
  && {
    width: auto;
    color: #fff;
  }
`;

export const ShowInput = styled(TextField)`
  && {
    width: 100%;
    border: solid lightgray 1px;
    background-color: #eaacac;
    border-radius: 5px;
  }
`;
export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  background-image: url(${PizzasHome});
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 300px) and (max-width: 500px) {
    padding: 1.25rem;
  }

  @media (min-height: 300px) and (max-height: 500px) {
    height: 130vh;
    
  }
`;

export const Main = styled.div`
  position: absolute;
  top: 130px;
  padding: 0.625rem;
  width: 380px;
  min-width: 280px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid lightgray 1px;
  border-radius: 0.625rem;

  h2 {
    text-align: center;
    margin-top: 10px;
    color: #fff;
  }

  @media (min-width: 501px) and (max-width: 930px) {
    position: unset;
    margin-top: 10px;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    position: unset;
    margin-top: 10px;
    width: 300px;
  }

  @media (min-height: 300px) and (max-height: 500px) {
    position: unset; 
    height: 90vh;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 19.375rem;
  height: 80%;
  justify-content: space-evenly;
  gap: 10px;

  @media (min-width: 300px) and (max-width: 500px) {
    width: 280px;
  }
`;

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

export const DivPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 1rem;
  }
`;
