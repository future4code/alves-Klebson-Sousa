import React, { useState } from "react";
import ProfilesPage from "./components/profilePage/ProfilesPage";
import MatchPage from "./components/matchPage/MatchPage";
import Header from "./components/header/Header";
import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`;
export const MainContainer = styled.div`
  
    padding: 20px 20px px;
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    -webkit-box-pack: end;
    justify-content: flex-end;
    border: solid 1px black;
    width: 400px;
    height: 600px;
    /* position: fixed; */
     /* top: 50%;
    left: 50%; */
    /* transform: translate(-50%, -50%); */
    margin-top: 20px;
    border: 1px solid black;
    border-radius: 5px;
    /* background-color: white;
    box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;  */

`

function App() {
  const [currentScreen, setCurrentScreen] = useState("ProfilesPage");

  const changeScreen = (chosenPage) => {
    setCurrentScreen(chosenPage);
  };
  const viewScreen = () => {
    if (currentScreen === "ProfilesPage") {
      return <ProfilesPage 
      currentScreen={currentScreen}
      changeScreen={changeScreen}
      />;
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
