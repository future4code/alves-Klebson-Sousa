import React, { useState } from "react";
import ProfilesPage from "./components/profilePage/ProfilesPage";
import MatchPage from "./components/matchPage/MatchPage";
import Header from "./components/header/Header";
import { Body, MainContainer } from "./components/styledApp";

function App() {
  const [currentScreen, setCurrentScreen] = useState("ProfilesPage");

  const changeScreen = (chosenPage) => {
    setCurrentScreen(chosenPage);
  };
  const viewScreen = () => {
    if (currentScreen === "ProfilesPage") {
      return (
        <ProfilesPage
          currentScreen={currentScreen}
          changeScreen={changeScreen}
        />
      );
    } else {
      return <MatchPage />;
    }
  };

  return (
    <Body>
      <MainContainer>
        <Header changeScreen={changeScreen} currentScreen={currentScreen} />
        {viewScreen()}
      </MainContainer>
    </Body>
  );
}

export default App;
