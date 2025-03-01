import React from "react";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage } from "../../routes/cordinator";
import Vector5 from "../../assets/Vector5.png";
import Vector6 from "../../assets/Vector6.png";
import Vector7 from "../../assets/Vector7.png";
import Vector8 from "../../assets/Vector8.png";
import LoginForm from "./LoginForm";
import useUntectedPage from "../../hooks/useUnprotectedPage";
import * as L from "./styled"

const LoginPage = () => {
  useUntectedPage()
  const navigate = useNavigate()
  return (
    <L.MainLogin>
      <L.ContainerLogo>
        <L.Vetor5 src={Vector5} />
        <L.Vetor6 src={Vector6} />
        <L.Vetor7 src={Vector7} />
        <L.Vetor8 src={Vector8} />
        <h1>LabEddit</h1>
      </L.ContainerLogo>
      <p>Projeto de rede social da Labenu</p>  
      <LoginForm/>   
      <L.ButtonCreate onClick={() => goToSignUpPage(navigate)}>
        Crie uma conta!
      </L.ButtonCreate>
    </L.MainLogin>
  );
};
export default LoginPage;
