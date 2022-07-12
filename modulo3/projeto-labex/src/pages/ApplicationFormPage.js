import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../routes/coordinator";

const ApplicationFormPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>
      <select>
        <option />
        <option />
        <option />
        <option />
      </select>
      <input placeholder="Nome" />
      <input placeholder="Idade" />
      <input placeholder="Texto de Candidatura" />
      <input placeholder="Profissão" />
      <select>
        <option />
        <option />
        <option />
        <option />
      </select>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
      <button>Enviar</button>
    </div>
  );
};

export default ApplicationFormPage;
