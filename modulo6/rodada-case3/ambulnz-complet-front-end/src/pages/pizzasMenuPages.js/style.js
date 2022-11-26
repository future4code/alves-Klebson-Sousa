import styled from "styled-components";

export const ContainerSection = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 100vh;
  background-color: black;
  /* overflow: auto; */

  ul {
    overflow: auto;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 77vh;
    ::-webkit-scrollbar {
      background-color: transparent;
    }
    button {
      width: auto;
      padding: 5px;
      height: 30px;
    }
  }

  @media (min-width: 300px) and (max-width: 500px) {
    ul {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      height: auto;
    }
  }

  @media (min-width: 501px) and (max-width: 930px) {
    ul {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export const InputSearch = styled.input`
  width: 20%;
  padding: 10px;
  margin: 150px 0 0 10px;
  border-radius: 25px;

  @media (min-width: 300px) and (max-width: 500px) {
    width: 40%;
    margin: 10px 0 0 10px;
  }
`;
