import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  img {
    max-width: 200px;
    min-height: 240px;
  }
`;

const ProfilesPage = (props) => {
  const [profile, setProfile] = useState({});

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bicalho/person"
      )
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProfile();
  }, []);

  const postProfile = () => {
    const body = {
      id: profile.id,
      choice: true,
    };
  
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bicalho/choose-person",
        body
      )
      
      .then((response) => {
        getProfile();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const resetProfile = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bicalho/clear"
      )
      .then((response) => {
        setProfile(response.data.id);
        alert("Perfis resetados com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Section>
        <h3>Profile</h3>
        <img src={profile.photo} alt={profile.photo_alt} />
        <p>
          {profile.name}, {profile.age}
        </p>
        <p>{profile.bio}</p>
        <div>
          <button onClick={getProfile}>Dislike</button>
          <button onClick={postProfile}>Like</button>
          <button onClick={resetProfile}>Resetar Profiles</button>
        </div>
      </Section>
    </div>
  );
};

export default ProfilesPage;
