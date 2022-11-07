import { ButtonCart, ContainerHeader, ImgLogo, LoginButton, SignupButton } from "./headerStyle"
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToLogin, goToOrderSummaryCard, goToSignUp } from "../routes/coordinator";
import pizzaLogo from "./../assets/pizzaLogo.png"
import Cart from "./../assets/Cart.png"

import { SvgIcon } from "@mui/material";

function Header({back, back2, back3}) {

  const navigate = useNavigate()

  return(
        <ContainerHeader>
            <ImgLogo src={pizzaLogo} alt="Fornália de pizza"/>
            <h1>Pizza Al Forno</h1>
            {back && <SignupButton onClick={() => goToSignUp(navigate)}>Sign-Up</SignupButton>}
            {back && <LoginButton onClick={() => goToLogin(navigate)}>Login</LoginButton>}
            {back3 && <button onClick={() => goToHomePage(navigate)}>Home</button>}
            {back2 && <ButtonCart onClick={() => goToOrderSummaryCard(navigate)} src={Cart} title="carrinho"/>}
        </ContainerHeader>
    )
}
export default Header