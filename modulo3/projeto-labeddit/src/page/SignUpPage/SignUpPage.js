import React from "react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { MainSignUp } from "./styled";
import {gotoLoginPage} from "../../routes/cordinator"

const SignUpPage = () => {
  const { form, onChangeForm, cleanFields } = useForm({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onSubmitSignUp = (event) => {
    event.preventDefault();
    console.log(form)
    axios
      .post(`${BASE_URL}/users/signup`, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        alert("Usuário cadastrado com sucesso!")
        gotoLoginPage(navigate);
        cleanFields();
      })
      .catch((error) => {
        console.log(error.response)
        alert("Algo deu errado! Tente novamente.");
      });
  };
  return (
    <MainSignUp>
      <div>
        <h1>Olá, boas vindas ao LabEddit</h1>
      </div>
      <form onSubmit={onSubmitSignUp}>
        <input
          name="username"
          placeholder="Nome de usuário"
          type="text"
          value={form.username}
          onChange={onChangeForm}
          required
        />
        <input
          name="email"
          placeholder="E-mail"
          type="email"
          value={form.email}
          onChange={onChangeForm}
          required
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          value={form.password}
          onChange={onChangeForm}
          required
          pattern={"^.{8,}"}
          title={"Senha deve ter no mínimo 8 caracteres"}
        />
        <p>
          
            Ao continuar você concorda com o nosso Contrato de usuário e nossa
            Política de Privacidade
          
        </p>

        <button>Cadastrar</button>
      </form>
    </MainSignUp>
  );
};
export default SignUpPage;
