import Header from "../../components/Header";
import React from "react";
import { useNavigate } from "react-router-dom";
import apple1 from "../../assets/apple1.png";
import { goToRegisterOrder } from "../../routes/cordinator";
import { Container, ContainerNavi, MainContainer } from "./style";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Container>
        <img src={apple1} />
        <h1>BEM VINDO!</h1>
        <h2>Selecione como quer comprar:</h2>
      </Container>
      <ContainerNavi>
        <img
          src="https://shopper.com.br/static/img/logo-programada.svg"
          alt="Imagem não encontrada!"
          class="sc-dexYeb jAcoMs"
        />
        <button onClick={() => goToRegisterOrder(navigate)}>Entrar</button>
        <h2>ENTREGAS MENSAIS</h2>
        <p>Mais de 6.000 itens com praticidade e economia.</p>
      </ContainerNavi>
    </MainContainer>
  );
};

export default HomePage;
