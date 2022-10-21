import styled from "styled-components";

export const ContainerSection = styled.section`
  width: 20rem;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0%;
  right: 0%;
  background-color: white;
  border-radius: 0 0 10px 10px;
  box-shadow: -8px 8px 0.625rem rgb(139, 135, 236);

  @media screen and (min-device-width: 320px) and (max-device-width: 520px) {
    width: 13.4rem;    
  }
  @media screen and (min-device-width: 540px) and (max-device-width: 920px) {
    width: 16rem; 
  }
`;
export const Section = styled.section`
  overflow: auto;
  width: 100%;
  max-height: 64vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow: auto;
  @media screen and (min-device-width: 320px) and (max-device-width: 520px) {
    max-height: 40vh;    
  }
  @media screen and (min-device-width: 540px) and (max-device-width: 920px) {
    max-height: 50vh;    
  }
`;

export const DivTitle = styled.div`
  padding: 0.625rem;
  margin-top: 5px;
  display: flex;
  /* grid-template-columns: 24px 1fr 24px; */
  justify-content: space-between;
  width: 100%;
  /* border: solid black 1px; */
  @media screen and (min-device-width: 320px) and (max-device-width: 520px) {
    padding: 0.3rem;
  }
  
`;

export const CartButton = styled.img`
  /* border: solid black 1px; */
  width: 5vh;
  height: 5vh;
  /* margin-top: 5px; */
  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    max-height: 3.5vh;
    max-width: 3.5vh;
  }
`;

export const TitleOrder = styled.h2`
  text-align: center;
  font-size: 1.5em;
  margin-left: 0.93rem;
  @media screen and (min-device-width: 320px) and (max-device-width: 520px) {
    font-size: 1em;
  }
  @media screen and (min-device-width: 540px) and (max-device-width: 920px) {
    font-size: 1.2em;
  }
`;

export const TotalOrder = styled.h2`
  font-size: 1.5em;
  font-weight: 400;
  padding: 0.625rem;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 1em;
    padding: 0.2rem;
  }
  @media screen and (min-device-width: 540px) and (max-device-width: 926px) {
    font-size: 1em;
    padding: 0.5rem;
  }
`;

export const ButtonFinish = styled.button`
  position: relative;
  font-weight: 700;
  font-size: 1.5em;
  padding: 0.85rem 0.813rem;
  width: 100%;
  background-color: rgb(45, 167, 122);
  border-radius: 0 0 10px 10px;
  border: none;
  color: white;
  :hover {
    background-color: rgb(20, 141, 96);
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 520px) {
    margin: auto;
    font-size: 1rem;
  }
  @media screen and (min-device-width: 540px) and (max-device-width: 926px) {
    margin: auto;
    font-size: 1.2rem;
    padding: 0.8rem 0.813rem;
  }
`;
