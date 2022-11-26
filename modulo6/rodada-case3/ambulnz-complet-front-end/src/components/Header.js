import { ButtonCart, ContainerHeader, GoTOBack, GoToHome, ImgLogo, LoginButton, LogoutButton, SignupButton } from "./headerStyle"
import { useNavigate } from "react-router-dom";
import { goToBack, goToHomePage, goToLogin, goToOrderSummaryCard, goToPizzasMenuPage, goToSignUp } from "../routes/coordinator";
import pizzaLogo from "./../assets/pizzaLogo.png"
import Cart from "./../assets/Cart.png"

function Header({back, back2, back3, back4}) {

  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const logout = () => {
    localStorage.removeItem("token")
    goToHomePage(navigate)
  }
        

  return(
        <ContainerHeader>
            {back4 && <GoTOBack onClick={() => goToBack(navigate)} />}
            <ImgLogo src={pizzaLogo} alt="Fornália de pizza"/>
            <h1>Pizza na Brasa</h1>
            {back && <SignupButton onClick={() => goToSignUp(navigate)}>Sign-Up</SignupButton>}
            {token? (back && <LoginButton onClick={() => goToPizzasMenuPage(navigate)}>Login</LoginButton>): (back && <LoginButton onClick={() => goToLogin(navigate)}>Login</LoginButton>)}
            {back2 && <GoToHome onClick={() => goToHomePage(navigate)} />}
            {back3 && <ButtonCart onClick={() => goToOrderSummaryCard(navigate)} src={Cart} title="carrinho"/>}
            {back2 && <LogoutButton onClick={logout} />}
        </ContainerHeader>
    )
}
export default Header