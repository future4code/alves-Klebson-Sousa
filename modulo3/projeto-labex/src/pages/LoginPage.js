import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack, goToAdminHome } from "../routes/coordinator";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
      <h1>Login</h1>
      <input placeholder="E-mail" />
      <input placeholder="Senha" />
      <button onClick={() => goToAdminHome(navigate)}>Entrar</button>
    </div>
  );
};

export default LoginPage;
