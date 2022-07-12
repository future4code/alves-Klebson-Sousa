import React, { useEffect, useState } from "react";
import axios from "axios";
import ScreenReset from "../screenReset/ScreenReset";
import {
  Section,
  DivMatch,
  Selectors,
  Texto,
  BotonDislike,
  BotonLike,
} from "./styledProfilePage";
import { AiFillHeart} from "react-icons/ai";

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
        alert(err);
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
        alert(err);
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
        alert(err);
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
            <BotonDislike onClick={getProfile}>X</BotonDislike>
            <BotonLike onClick={postProfile}>
              <AiFillHeart />
            </BotonLike>
          </Selectors>
        </Section>
      ) : (
        <ScreenReset resetProfile={resetProfile} />
      )}
    </div>
  );
};

export default ProfilesPage;
