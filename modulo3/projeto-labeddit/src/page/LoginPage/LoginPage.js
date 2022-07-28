import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonCreate, ContainerLogo, MainLogin, Vetor5, Vetor6, Vetor7, Vetor8 } from "./styled";
import { goToSignUpPage } from "../../routes/cordinator";
import Vector5 from "../../assets/Vector5.png";
import Vector6 from "../../assets/Vector6.png";
import Vector7 from "../../assets/Vector7.png";
import Vector8 from "../../assets/Vector8.png";
import LoginForm from "./LoginForm";
import useUntectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = () => {
  useUntectedPage()
  const navigate = useNavigate()
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
      <LoginForm/>   
      <ButtonCreate onClick={() => goToSignUpPage(navigate)}>
        Crie uma conta!
      </ButtonCreate>
    </MainLogin>
  );
};
export default LoginPage;
