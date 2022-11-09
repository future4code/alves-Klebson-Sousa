import styled from "styled-components";
import PizzasHome from "../../assets/Pizza_with_olive_and_onion.jpg";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #000;
  div {
    height: 100%;
    background-image: url(${PizzasHome});
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 118px;
    h2 {
      text-align: center;
      margin-top: 20px;
      color: white;
    }
    img {
        width: auto;
        height: auto;
    }
    @media (min-width: 300px) and (max-width: 500px) {
    margin-top: 0;
  }
  }
`;
