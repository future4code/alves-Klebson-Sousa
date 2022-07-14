import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/Urls";
import {
  goToHomePage,
  goToCreateTrip,
  goToTripDetails,
  goToLoginPage,
} from "../routes/coordinator";
import { MainContainer } from "../components/styledAdminHome";
import { useProtecPage } from "../constants/functions";

const AdminHomePage = () => {
  useProtecPage();

  // const params = useParams();
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // const token = localStorage.getItem("token");
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then((response) => {
        setTrips(response.data.trips);
        console.log("Trips", response.data.trips);
      })
      .catch((error) => {
        console.log("Deu errado", error.response);
      });
  };
  const deleteTrip = (trips) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`${BASE_URL}/trips/${trips.id}`, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        alert(`Viagem ${trips.name} deletada com sucesso!`);
        getTrips();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const listTrip = trips.map((trip) => {
    return (
      <MainContainer key={trip.id}>
        <div onClick={() => goToTripDetails(navigate, trip.id)}>
          {trip.name}
        </div>

        <button onClick={() => deleteTrip(trip)}>X</button>
      </MainContainer>
    );
  });
  return (
    <div>
      <h1>Controle de Viagens</h1>
      {listTrip}
      <button onClick={() => goToHomePage(navigate)}>Voltar</button>
      <button onClick={() => goToCreateTrip(navigate)}>Criar Viagem</button>
      <button>Logout</button>

      <button>Excluir</button>
    </div>
  );
};

export default AdminHomePage;
