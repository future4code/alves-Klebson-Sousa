import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import restaurant from "./../../assets/restaurant.jpg";

export const GoTOBack = styled(ArrowBackIosNewIcon)`
  cursor: pointer;
  :hover {
    border-radius: 50%;
    color: #f5f5fb;
    background-color: #f13c3c;
    box-shadow: 0 5px 0;
  }

  :active {
    position: relative;
    top: 5px;
    box-shadow: none;
  }
`;

export const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: baseline;
  justify-content: center;
  background-image: url(${restaurant});
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const ContainerSection = styled.section`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  max-width: 80%;
  max-height: 80vh;
  padding: 3% 4%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  background-color: rgba(255, 250, 250, 0.37);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);

  div {
    overflow: auto;
    max-height: 500px;

    ::-webkit-scrollbar {
      background-color: transparent;
    }
  }

  @media (min-width: 280px) and (max-width: 420px) {
    width: 90%;
  }

  @media (min-width: 620px) and (max-width: 980px) {
    height: 30%;
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 15px;
  }

  h2 {
    text-align: end;
    margin-top: 10px;
  }
`;

export const ButtonConfirm = styled.button`
  margin-top: 0.625rem;
  width: 12.5rem;
  font-size: 1.5rem;
  color: blue;
  background-color: transparent;
  border: none;
  border-bottom: blue solid 0.125rem;
  cursor: pointer;
  
  :hover {
    font-weight: bolder;
    border-bottom: blue solid 0.250rem;
    margin-top: 0.5rem;
  }

  :active {
    position: relative;
    top: 5px;
  }
`;
