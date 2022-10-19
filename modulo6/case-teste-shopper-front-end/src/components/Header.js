import { ButtonOrder, ContainerHeader, Title } from "./headerStyle";
import logo2 from "./../assets/logo2.png"
import { useNavigate } from "react-router-dom";
import { goToOrderSummary } from "../routes/cordinator";

const Header = ({ title, back, backP }) => {
    const navigate = useNavigate()

  return (
    <ContainerHeader>
      <img src={logo2}/>
       <Title>{title}</Title>       
       {backP && <ButtonOrder onClick={() => goToOrderSummary(navigate)}>Confira</ButtonOrder>}
    </ContainerHeader>
  );
};

export default Header;
