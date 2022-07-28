import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { goToLoginPage, goToPostPage } from "../routes/cordinator";

export const login = (body, cleanFields, navigate) => {
  
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      goToPostPage(navigate);
      cleanFields();
    })
    .catch((error) => {
      alert("Senha ou email inválido");
    });
};

export const registerUser = (bory, cleanFields, navigate)   => {
    axios
      .post(`${BASE_URL}/users/signup`, bory)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        alert("Usuário cadastrado com sucesso!")
        goToLoginPage(navigate);
        cleanFields();
      })
      .catch((error) => {
        console.log(error.response)
        alert("Algo deu errado! Tente novamente.");
      });
  }