import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToBack, goToAplicationForm } from "../routes/coordinator";
import axios from "axios";
import { ListContainer, MainContainer } from "../components/styledListTrips";

const ListTripsPage = () => {
  const navigate = useNavigate();
  const [listTrips, setListTrips] = useState([]);

  useEffect(() => {
    getListTrip();
  }, []);

  const getListTrip = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:klebson/trips"
      )
      .then((response) => {
        setListTrips(response.data.trips);
        console.log("Trips", response.data.trips);
      });
  };

  const listTrip = listTrips.map((trip) => {
    return (
      <ListContainer key={trip.id}>
        <p>Nome: {trip.name}</p>
        <p>Descrição: {trip.description}</p>
        <p>Planeta: {trip.planet}</p>
        <p>Duração: {trip.durationInDays}</p>
        <p>Data: {trip.date}</p>

       
      </ListContainer>
    );
  });
  return (
    <MainContainer>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
      <button onClick={() => goToAplicationForm(navigate)}>Inscrever-se</button>
      <h1>Lista de Viagens</h1>
      <div>
        {listTrip}
      </div>
      
    </MainContainer>
  );
};

export default ListTripsPage;
