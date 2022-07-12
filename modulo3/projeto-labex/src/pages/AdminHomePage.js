import React from "react";
import { useNavigate } from "react-router-dom";
import {
  goToBack,
  goToCreateTrip,
  goToTripDetails,
} from "../routes/coordinator";

const AdminHomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Controle de Viagens</h1>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
      <button onClick={() => goToCreateTrip(navigate)}>Criar Viagem</button>
      <button>Logout</button>
      <p onClick={() => goToTripDetails(navigate)}>Digimundo</p>
      <button>Excluir</button>
    </div>
  );
};

export default AdminHomePage;
