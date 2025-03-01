import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../constants/Urls";
import { goToBack } from "../routes/coordinator";
import axios from "axios";
import {
  OutstandingCandidates,
  DetailTrip,
  DivCandidates,
  MainContainer,
} from "../components/styledDetails";

const TripDetailsPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [tripsDetail, setTripsDetail] = useState({});
  const [candidates, setCandidates] = useState([]);
  const [approved, setApproved] = useState();

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
        setTripsDetail(response.data.trip);
        setCandidates(response.data.trip.candidates);
        setApproved(response.data.trip.approved);        
      })
      .catch((error) => {
        alert("Algo deu errado")
      });
  };

  const approveCandidates = (id, approve) => {
    const token = localStorage.getItem("token");
    const body = {
      approve: approve,
    };
    axios
      .put(
        `${BASE_URL}/trips/${tripsDetail.id}/candidates/${id}/decide`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        if (approve === true) {
          alert("Candidato aprovado com sucesso");          
        } else {
          alert("Candidato reprovado com sucesso");
        }
        document.location.reload(true);
      })
      .catch((error) => {
        alert("Algo deu errado! Tente novamente.");
      });
  };
  const approvedCandidates =
    approved &&
    approved.map((candidate) => {
      return (
        <DivCandidates key={candidate.id}>
          <li>{candidate.name}</li>
        </DivCandidates>
      );
    });

  const listCandidates =
    candidates &&
    candidates.map((candidate) => {
      return (
        <OutstandingCandidates key={candidate.id}>
          <p>Nome: {candidate.name}</p>
          <p>Profissão: {candidate.profession}</p>
          <p>Idade: {candidate.age}</p>
          <p>País: {candidate.country}</p>
          <p>Texto de Candidatura: {candidate.applicationText}</p>
          <div>
            <button onClick={() => approveCandidates(candidate.id, true)}>
              Aprovar
            </button>
            <button onClick={() => approveCandidates(candidate.id, false)}>
              Reprovar
            </button>
          </div>
        </OutstandingCandidates>
      );
    });

  return (
    <MainContainer>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
      <DetailTrip>
        <h1>Detalhes da viagem</h1>
        <p>{tripsDetail.name}</p>
        <p>{tripsDetail.description}</p>
        <p>{tripsDetail.planet}</p>
        <p>{tripsDetail.durationInDays}</p>
        <p>{tripsDetail.date}</p>
      </DetailTrip>
      {candidates && candidates.length ? (
        <DivCandidates>
          <h2>Candidatos Pendentes</h2>
          <div>{listCandidates}</div>
        </DivCandidates>
      ) : (
        <DivCandidates>
          <h2>Candidatos Pendentes</h2>
          <p>Não há candidatos pendentes</p>
        </DivCandidates>
      )}
      {approvedCandidates && approvedCandidates.length ? (
        <DivCandidates>
          <h2>Candidatos Aprovados</h2>
          {approvedCandidates}
        </DivCandidates>
      ) : (
        <DivCandidates>
          <h2>Candidatos Aprovados</h2>
          <p>Não há candidatos Aprovados</p>
        </DivCandidates>
      )}
    </MainContainer>
  );
};

export default TripDetailsPage;
