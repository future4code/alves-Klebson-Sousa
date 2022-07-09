import React from "react";
import {MainHeader, ButtonMatch, ButtonProfile} from "./styled.Header"
import {FiUser} from 'react-icons/fi'
import {FiUserCheck} from 'react-icons/fi'

const Header = (props) => {
  const mostrarBotao = () => {
    if (props.currentScreen === "ProfilesPage") {
      return (
        <MainHeader>
          <h1>AstroMatch</h1>
          <ButtonProfile onClick={() => props.changeScreen("MatchPage")}>
            <FiUser/>
          </ButtonProfile>
        </MainHeader>
      );
    } else {
      return (
        <MainHeader>
          <ButtonMatch onClick={() => props.changeScreen("ProfilesPage")}>
            <FiUserCheck/>
          </ButtonMatch>
          <h1>AstroMatch</h1>
        </MainHeader>
      );
    }
  };
  return <div>{mostrarBotao()}</div>
};

export default Header;
