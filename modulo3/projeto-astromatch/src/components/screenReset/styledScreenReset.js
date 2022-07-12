import styled from "styled-components";

export const Reset = styled.div`
  font-family: "Roboto", sans-serif;  
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 10px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      width: 55px;
      height: 55px;
      border-radius: 50px;
      background-color: rgb(117, 49, 146);
      color: white;
      border: transparent;
      svg {
        font-size: 2em;
      }
      
      
      :hover {
        width: 60px;
        height: 60px;
        border-radius: 50px;
        background-color: #ff00d9;
        color: green;
      }
    }
  }
`; 

