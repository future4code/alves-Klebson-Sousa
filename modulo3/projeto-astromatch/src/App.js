import React, { useState } from "react";
import ProfilesPage from "./components/ProfilesPage";
import MatchPage from "./components/MatchPage";
import Header from "./components/Header";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [currentScreen, setCurrentScreen] = useState("ProfilesPage");

  const changeScreen = (chosenPage) => {
    setCurrentScreen(chosenPage);
  };
  const viewScreen = () => {
    if (currentScreen === "ProfilesPage") {
      return <ProfilesPage />;
    } else {
      return <MatchPage />;
    }
  };
  // const irParaMatchPage = () => {
  //   setCurrentScreen("MatchPage");
  // };
  // const irParaProfilesPage = () => {
  //   setCurrentScreen("ProfilesPage");
  // };
  // const escolherTela = () => {
  //   if (currentScreen) {
  //     return <ProfilesPage />;
  //   } else {
  //     return <MatchPage />;
  //   }
  // };

  return (
    <MainContainer>
      <Header changeScreen={changeScreen} currentScreen={currentScreen} />
      <hr/>
      {viewScreen()}
    </MainContainer>
  );
}

export default App;
