import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToBack, goToAdminHome } from "../routes/coordinator";
import { BASE_URL } from "../constants/Urls";
import axios from "axios";
import useForm from "../hooks/useForm";


const LoginPage = () => {
  const { form, onChangeForm, cleanFields } = useForm({email: "", password: ""})
  const navigate = useNavigate();



  const onSubmitLogin = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/login`, form)
      .then((response) => {
        console.log("Deu certo", response.data.token);
        localStorage.setItem("token", response.data.token);
        goToAdminHome(navigate);
        cleanFields()
      })
      .catch((error) => {
        alert("Senha ou email inválido");
      });
  };

  return (
    <div>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
      <h1>Login</h1>
      <form onSubmit={onSubmitLogin}>
        <input
          name="email"
          placeholder="email"
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
          pattern={"^.{5,}"}
          title={"Senha deve ter no mínimo 5 caracteres"}
        />
        <button>Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
