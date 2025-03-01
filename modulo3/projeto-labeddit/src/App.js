import React from "react";
import { Router } from "./routes/Router";
import theme from "./constants/theme";
import GlobalState from "./global/GlobalState";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #E5E5E5;
   
`

const App = () => {
  return (
    <GlobalState>
      <MainContainer>
        <Router />
      </MainContainer>
    </GlobalState>
  );
};

export default App;
