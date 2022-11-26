import styled from "styled-components";

export const ContainerSection = styled.section`
  ul {
    display: flex;
    width: 100%;       
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  header {
    display: flex;
    justify-content: space-between;
    padding: 1.35em;
    margin-left: 2.813rem;
    h1 {
        color: rgb(45, 167, 122);
    }
    button {
      margin-right: 30%;
      border-radius: 1.563rem;
      padding: 0.625rem;
      font-size: 0.9em;
      width: 7.5rem;
      cursor: pointer;
      border: none;
      background-color: rgb(45, 167, 122);
      color: #f5efef;
      :hover {
        background-color: rgb(38, 145, 106);
      }
    }
  }
`;