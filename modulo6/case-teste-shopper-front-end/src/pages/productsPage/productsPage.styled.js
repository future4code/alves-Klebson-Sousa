import styled from "styled-components";

export const ContainerSection = styled.section`
  ul {
    display: flex;
    width: 100%;
    border: solid black 1px;    
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  header {
    display: flex;
    justify-content: space-between;
    padding: 0.65rem;
    h1 {
        color: rgb(45, 167, 122);
    }
    button {
      margin-right: 9.375rem;
      border-radius: 1.563rem;
      font-size: 0.6rem;
      width: 5rem;
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