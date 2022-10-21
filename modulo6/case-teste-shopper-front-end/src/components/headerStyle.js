import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 19vh;
  width: 100%;
  border: none;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #ddd;
  background: #fff;
  background-image: linear-gradient(
    to bottom,
    #fff 30%,
    #fff 60%,
    #002d62 317%
  );
  img {
    width: 50%;
    height: 12vh;
    background-color: transparent;
    margin-left: 20px;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 540px) {
    display: flex;
    
    img {
      width: 26vw;
      height: 8vh;
    }
  }
  @media screen and (min-device-width: 540px) and (max-device-width: 920px) {
    height: 19vh;
  }
`;
export const Title = styled.h2`
  text-align: center;
  font-family: Geneva;
  font-size: 2.5rem;
  padding: 0.625;
  color: rgb(45, 167, 122);
  @media screen and (min-device-width: 320px) and (max-device-width: 520px) {
    font-size: 2rem;
    padding: 0.3rem;
    margin-right: 0.625rem;
  }
  @media screen and (min-device-width: 540px) and (max-device-width: 926px) {
    font-size: 2rem;
    padding: 0.3rem;
    margin-right: 0.625rem;
  }
`;
