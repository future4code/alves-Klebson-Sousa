import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";
import {HeaderContainer} from "./styledHeader"

const Header = () => {
    const navigate = useNavigate()

  return (
    <HeaderContainer>
      <h1>Logo</h1>
      <button onClick={() => goToHomePage(navigate)}>Ir para Home</button>
    </HeaderContainer>
  );
};

export default Header;
