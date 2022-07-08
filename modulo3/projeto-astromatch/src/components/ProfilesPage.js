import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ScreenReset from "./ScreenReset";

export const Section = styled.section`
  padding: 20px 20px 0px;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  -webkit-box-pack: end;
  justify-content: flex-end;
`;
const DivMatch = styled.div`
  box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.5s ease 0s;
  height: 430px;
  animation: 0.5s ease 0s 1 normal forwards running none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    /* display: block; */
    z-index: 1;
  }
`;
const Selectors = styled.div`
  display: flex;
  justify-content: space-evenly;
  -webkit-box-align: center;
  align-items: center;
  padding: 10px 0px;
`;
const Texto = styled.div`
  height: 30%;
  position: absolute;
  bottom: 0;
  width: 92%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  color: white;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding: 15px;
  z-index: 2;
`;

const ProfilesPage = (props) => {
  const [profile, setProfile] = useState({});

  const changeScreen = props.changeScreen;
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
      id: profile?.id,
      choice: true,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bicalho/choose-person",
        body
      )

      .then((response) => {
        getProfile();
        response.data.isMatch === true && alert("Deu Match!");
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const resetProfile = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bicalho/clear"
      )
      .then((response) => {
        setProfile(response.data.id);
        getProfile();
        alert("Perfis resetados com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {profile ? (
        <Section>
          <h3>Profile</h3>

          <DivMatch>
            <img src={profile?.photo} alt={profile?.photo_alt} />
            <Texto>
              <p>
                {profile?.name}, {profile?.age}
                <br />
                {profile?.bio}
              </p>
            </Texto>
          </DivMatch>
          <Selectors>
            <button onClick={getProfile}>Dislike</button>
            <button onClick={postProfile}>Like</button>
          </Selectors>
        </Section>
      ) : (
        <ScreenReset resetProfile={resetProfile} />
      )}
    </div>
  );
};

export default ProfilesPage;
