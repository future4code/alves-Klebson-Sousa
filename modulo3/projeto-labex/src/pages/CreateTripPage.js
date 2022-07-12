import React from "react";
import {useNavigate} from "react-router-dom"
import { goToBack } from "../routes/coordinator";

const CreateTripPage = () => {
  const navigate = useNavigate()



  return (
    <div>
      <h1>Criar Viagem</h1>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
      <button>Criar</button>
      <input placeholder="Nome"/>
      <select>
        <option/>
        <option/>
        <option/>
        <option/>
      </select>
      <input placeholder="Data"/>
      <input placeholder="Descrição"/>
      <input placeholder="Duração de dias"/>
    </div>
  );
};

export default CreateTripPage;
