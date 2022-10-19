import styled from "styled-components";
import shopBackground from "../../assets/shopBackground.jpg";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lato";
  border: solid black 1px;
  height: 100vh;
  
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 80px;
  margin-bottom: 40px;
  img {
    width: 100px;
  }
  h1 {
    font-size: 28px;
    color: rgb(27, 26, 57);
  }
  h2 {
    font-size: 19px;
    font-weight: 400;
    color: rgb(27, 26, 57);
  }
`;
export const ContainerNavi = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
  img {
    width: 210px;
    height: 60px;
  }
  button {
    padding: 12px 10px;
    border-radius: 50px;
    width: 100%;
    background-color: rgb(27, 26, 57);
    border-style: none;
    margin-top: 30px;
    color: white;
    font-size: 17px;
    cursor: pointer;
  }
  p {
    font-size: 15px;
    font-weight: 500;
    color: rgb(85, 85, 85);
  }
  h2 {
    margin-top: 25px;
    font-size: 17px;
    color: rgb(27, 26, 57);
    font-weight: 400;
  }
`;
