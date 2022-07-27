import React from "react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { ButtonContinue, ButtonCreate, ContainerLogo, Form, MainLogin, Vetor5, Vetor6, Vetor7, Vetor8 } from "./styled";
import axios from "axios";
import { goToPostPage, goToSignUpPage } from "../../routes/cordinator";
import Vector5 from "../../assets/Vector5.png";
import Vector6 from "../../assets/Vector6.png";
import Vector7 from "../../assets/Vector7.png";
import Vector8 from "../../assets/Vector8.png";

const LoginPage = () => {
  const { form, onChangeForm, cleanFields } = useForm({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onSubmitLogin = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/users/login`, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToPostPage(navigate);
        cleanFields();
      })
      .catch((error) => {
        alert("Senha ou email inválido");
      });
  };
  return (
    <MainLogin>
      <ContainerLogo>
        <Vetor5 src={Vector5} />
        <Vetor6 src={Vector6} />
        <Vetor7 src={Vector7} />
        <Vetor8 src={Vector8} />
        <h1>LabEddit</h1>
      </ContainerLogo>
      <p>Projeto de rede social da Labenu</p>

      <Form onSubmit={onSubmitLogin}>
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
          pattern={"^.{8,}"}
          title={"Senha deve ter no mínimo 8 caracteres"}
        />
        <ButtonContinue>Continuar</ButtonContinue>
      </Form>      
      <ButtonCreate onClick={() => goToSignUpPage(navigate)}>
        Crie uma conta!
      </ButtonCreate>
    </MainLogin>
  );
};
export default LoginPage;
