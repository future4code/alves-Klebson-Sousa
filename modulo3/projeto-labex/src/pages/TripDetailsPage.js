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
  const [approve, setApprove] = useState();
  // console.log(params);
  useEffect(() => {
    getTripDetail();
  }, []);

  const getTripDetail = (id) => {
    const token = localStorage.getItem("token");
    console.log(token)
    axios
      .get(`${BASE_URL}/trip/${params.id}`, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        setTripsDetail(response.data.trip);
        setCandidates(response.data.trip.candidates);
      })
      .catch((error) => {
        console.log("Deu erro", error.response);
      });
  };
  
  // const candidatesId = candidates.map((candidateId) => {
  //   return candidateId.id;
  // });
  

  const approveCandidates = (id, approve) => {
    const token = localStorage.getItem("token");
    const body = {
      approve: approve,
    };
    axios
      .put(`${BASE_URL}/trips/${params.id}/candidates/${id}/decide`, body, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log(id);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const aprovar = (id) => {
    setApprove(true)
    approveCandidates(id)
  }
  const reprovar = (id) => {
    setApprove(false)
    approveCandidates(id)
  }

  const listCandidates =
    candidates &&
    candidates.map((candidate) => {
      return (
        <div>
          <p key={candidate.id}>Nome: {candidate.name}</p>;
          <button onClick={() => approveCandidates(candidate.id, true)}>
            Aprovar
          </button>
          <button onClick={() => approveCandidates(candidate.id, false)}>
            Reprovar
          </button>
        </div>
      );
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
    </div>
  );
};

export default TripDetailsPage;
