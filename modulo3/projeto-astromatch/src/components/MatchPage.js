import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const MatchPage = (props) => {
  const [matcheList, setMacheList] = useState([]);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bicalho/matches"
      )

      .then((response) => {
        setMacheList(response.data.matches);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getMatches();
  }, []); 
  const matchesList = matcheList.map((matche) => {
    return (
      <Section key={matche.id}>
        <p>{matche.name}</p>
        <img src={matche.photo} height={240} width={180}/>
      </Section>
    );
  });

  return <div>{matchesList}</div>;
};

export default MatchPage;
