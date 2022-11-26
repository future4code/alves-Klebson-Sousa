import styled from "styled-components";

export const MainLi = styled.li`
  display: flex;
  flex-direction: column;
  background-color: rgb(213, 235, 227);
  div {
    height: auto;
    display: flex;
    justify-content: space-between;
    margin: 20px;
    color: rgb(45, 167, 122);
    button {
      width: 10%;
      height: 35%;
      font-size: 1.5em;
      background-color: transparent;
      border: none;
      margin: 10px;
      text-align: center;
      :hover {
        font-size: 2rem;
      }
    }
  }
  @media screen and (min-device-width: 540px) and (max-device-width: 926px) {
    height: auto;
    div {
      margin: 10px;
      margin-bottom: 5px;
      h3 {
        font-size: 0.85rem;
      }
    }
  }
`;
export const Container = styled.span`
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
  @media screen and (min-device-width: 320px) and (max-device-width: 520px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

export const ButtonRemove = styled.img`
  height: 3vh;
  width: 3vw;
  @media screen and (min-device-width: 320px) and (max-device-width: 520px) {
    height: 3vh;
  width: 4vw;
  }
  @media screen and (min-device-width: 540px) and (max-device-width: 920px) {
    height: 4vh;
  width: 3vw;
  }
`;
