import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../constants/Urls";
import { goToBack } from "../routes/coordinator";
import axios from "axios";

const TripDetailsPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [tripsDetail, setTripsDetail] = useState({});
  const [candidates, setCandidates] = useState([]);
  console.log(params);
  useEffect(() => {
    getTripDetail();
  }, []);

  const getTripDetail = (id) => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/trip/${params.id}`, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        console.log(response.data.trip);
        setTripsDetail(response.data.trip);
        setCandidates(response.data.trip.candidates);
      })
      .catch((error) => {
        console.log("Deu erro", error.response);
      });
  };

  const listCandidates =
    candidates &&
    candidates.map((candidate) => {
      return <p key={candidate.id}>Nome: {candidate.name}</p>;
    });

  return (
    <div>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
      <h1>Detalhes da viagem</h1>
      <p>{tripsDetail.name}</p>
      <p>{tripsDetail.description}</p>
      <p>{tripsDetail.planet}</p>
      <p>{tripsDetail.durationInDays}</p>
      <p>{tripsDetail.date}</p>

      <h2>Candidatos</h2>
      {listCandidates}
      <button>Aprovar</button>
      <button>Reprovar</button>
    </div>
  );
};

export default TripDetailsPage;
