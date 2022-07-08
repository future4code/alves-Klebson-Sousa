import React from "react";
import styled from "styled-components";

export const MainHeader = styled.div`
  height: 50px;
  border-bottom: 1px solid lightgray;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  padding: 0px 10px;
  flex-shrink: 0;
  button {
    border-radius: 25px;
    cursor: pointer;
    :hover {
      transition: all 0.2s ease 0s;
      color: rgb(208, 165, 227);
      background-color: rgb(117, 49, 146);
    }
  }
`;

const Header = (props) => {
  const mostrarBotao = () => {
    if (props.currentScreen === "ProfilesPage") {
      return (
        <MainHeader>
          <h1>AstroMatch</h1>
          <button onClick={() => props.changeScreen("MatchPage")}>
            Ir para MatchPage
          </button>
        </MainHeader>
      );
    } else {
      return (
        <MainHeader>
          <button onClick={() => props.changeScreen("ProfilesPage")}>
            Ir para ProfilesPage
          </button>
          <h1>AstroMatch</h1>
        </MainHeader>
      );
    }
  };
  return <div>{mostrarBotao()}</div>
};

export default Header;
