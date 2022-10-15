import { ButtonOrder, ContainerHeader, Title } from "./headerStyle";
import logo from "./../assets/logo.jpg"
import { useNavigate } from "react-router-dom";
import { goToOrderSummary, goToRegisterOrder } from "../routes/cordinator";

const Header = ({ title, back, backP }) => {
    const navigate = useNavigate()

  return (
    <ContainerHeader>
      <img src={logo}/>
       <Title>{title}</Title>
       {back && <ButtonOrder onClick={() => goToRegisterOrder(navigate)}>Crie sua lista</ButtonOrder>}
       {backP && <ButtonOrder onClick={() => goToOrderSummary(navigate)}>Confira</ButtonOrder>}
    </ContainerHeader>
  );
};

export default Header;
