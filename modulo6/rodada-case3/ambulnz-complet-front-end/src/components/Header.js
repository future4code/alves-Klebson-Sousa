import { ButtonCart, ContainerHeader, ImgLogo, LoginButton, SignupButton } from "./headerStyle"
import { useNavigate } from "react-router-dom";
import { goToLogin, goToOrderSummaryCard } from "../routes/coordinator";
import pizzaLogo from "./../assets/pizzaLogo.png"
import Cart from "./../assets/Cart.png"

function Header({back}) {

  const navigate = useNavigate()

  return(
        <ContainerHeader>
            <ImgLogo src={pizzaLogo} alt="Fornália de pizza"/>
            <h1>Pizza Al Forno</h1>
            <SignupButton >Signup</SignupButton>
            {back && <LoginButton onClick={() => goToLogin(navigate)}>Login</LoginButton>}
            <ButtonCart onClick={() => goToOrderSummaryCard(navigate)} src={Cart} title="carrinho"/>
        </ContainerHeader>
    )
}
export default Header