import { ContainerHeader, Title } from "./headerStyle";
import logoShopper2 from "./../assets/logoShopper2.jpg"

const Header = ({ title, back, backP }) => {
  return (
    <ContainerHeader>
      <img src={logoShopper2}/>
       <Title>{title}</Title>       
    </ContainerHeader>
  );
};

export default Header;
