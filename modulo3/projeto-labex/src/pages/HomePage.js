import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { goToListTrips, goToLoginPage } from "../routes/coordinator";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Labex</h1>
      <button onClick={() => goToListTrips(navigate)}>Ver Viagens</button>
      {/* <button onClick={goToAdminHome}>Área de Adimin</button> */}
      <button onClick={() => goToLoginPage(navigate)}>Área de Adimin</button>
    </div>
  );
}

export default HomePage;
