import React from "react";
import styled from "styled-components";

export const MainHeader = styled.div`
  display: flex;
`;

const Header = (props) => {
  const mostrarBotao = () => {
    if (props.currentScreen === "ProfilesPage") {
      return (
        <button onClick={() => props.changeScreen("MatchPage")} >
          Ir para MatchPage
        </button>
      );
    } else {
      return (
        <button onClick={() => props.changeScreen("ProfilesPage")}>
          Ir para ProfilesPage
        </button>
      );
    }
  };
  return (
    <MainHeader>
      <h1>AstroMatch</h1>
      {mostrarBotao()}
    </MainHeader>
  );
};

export default Header;
