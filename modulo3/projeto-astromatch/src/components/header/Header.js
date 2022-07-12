import React from "react";
import {
  MainHeader,
  ButtonMatch,
  ButtonProfile,
  DivTitle,
  Texto1,
  Texto2,
} from "./styled.Header";
import { FiUser } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";

const Header = (props) => {
  const mostrarBotao = () => {
    if (props.currentScreen === "ProfilesPage") {
      return (
        <MainHeader>
          <div></div>
          <DivTitle>
            <Texto1>astro</Texto1>
            <Texto2>match</Texto2>
          </DivTitle>

          <ButtonProfile onClick={() => props.changeScreen("MatchPage")}>
            <FiUser />
          </ButtonProfile>
        </MainHeader>
      );
    } else {
      return (
        <MainHeader>
          <ButtonMatch onClick={() => props.changeScreen("ProfilesPage")}>
            <FiUserCheck />
          </ButtonMatch>
          <DivTitle>
            <Texto1>astro</Texto1>
            <Texto2>match</Texto2>
          </DivTitle>
          <div></div>
        </MainHeader>
      );
    }
  };
  return <div>{mostrarBotao()}</div>;
};

export default Header;
