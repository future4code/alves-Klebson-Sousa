import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../routes/coordinator";

const TripDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
      <h1>Detalhes da viagem</h1>
      <button>Aprovar</button>
      <button>Reprovar</button>
    </div>
  );
};

export default TripDetailsPage;
