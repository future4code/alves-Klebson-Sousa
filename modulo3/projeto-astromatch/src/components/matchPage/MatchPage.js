import React, { useEffect, useState } from "react";
import axios from "axios";
import { Section } from "./styled.Match";

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
        <div>
          <img src={matche.photo} />
          <p>{matche.name}</p>
        </div>
      </Section>
    );
  });

  return (
    <div>
      <h2>Matches</h2>
      {matchesList}
    </div>
  );
};

export default MatchPage;
