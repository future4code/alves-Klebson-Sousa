import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToBack, goToAplicationForm } from "../routes/coordinator";
import axios from "axios";
import {
  ListContainer,
  MainContainer,
  NavButton,
} from "../components/styledListTrips";
import { BASE_URL } from "../constants/Urls";

const ListTripsPage = () => {
  const navigate = useNavigate();
  const [listTrips, setListTrips] = useState([]);

  useEffect(() => {
    getListTrip();
  }, []);

  const getListTrip = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then((response) => {
        setListTrips(response.data.trips);        
      })
      .catch((error) => {
        alert("Deu errado");
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
      <NavButton>
        <button onClick={() => goToBack(navigate)}>Voltar</button>
        <button onClick={() => goToAplicationForm(navigate)}>
          Inscrever-se
        </button>
      </NavButton>
      <h1>Lista de Viagens</h1>
      <div>{listTrip}</div>
    </MainContainer>
  );
};

export default ListTripsPage;
