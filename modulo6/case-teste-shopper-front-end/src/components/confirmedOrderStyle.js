import styled from "styled-components";

export const ContainerSection = styled.section`
  position: absolute;
  border: 1px solid black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  /* height: 20%; */
  background-color: white;
  font-family: "Lato";
  p {
    font-size: 17px;
    font-weight: 300;
    margin: 5px;
  }
`;

export const ClosePopup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  border: solid black 1px;
  width: 100%;
  height: 100%;
  span {    
    position: absolute;
    font-size: 17px;
    top: 4.5%;
    left: 94.5%;
    padding: 4px;
    cursor: pointer;
    box-sizing: border-box;
    background-color: #d1cdcd;
    border: none;

    :hover {
      background-color: rgb(72, 70, 140);
      color: white;
      transition: background 2s;
    }
  }
`;
