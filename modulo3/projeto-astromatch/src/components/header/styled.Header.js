import styled from "styled-components";

export const MainHeader = styled.div`
  font-family: "Roboto", sans-serif;
  height: 50px;
  border-bottom: 1px solid lightgray;
  display: flex;  
  justify-content: space-between;  
  align-items: center;
`;
export const ButtonMatch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2%;
  border-radius: 25px;
  width: 40px;
  height: 40px;
  color: rgb(243, 228, 248);
  background-color: rgb(117, 49, 146);
  border: transparent;
  cursor: pointer;
  svg {
    font-size: 1.5em;
  }
  :hover {
    color: rgb(243, 228, 248);
    background-color: rgb(193, 118, 225);
    width: 35px;
    height: 35px;
    margin-left: 3.25%;
  }
`;
export const ButtonProfile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2%;
  border-radius: 25px;
  width: 40px;
  height: 40px;
  color: white;
  border: transparent;
  background-color: rgb(74, 163, 151);
  cursor: pointer;
  svg {
    font-size: 1.5em;
  }
  :hover {
    background-color: rgb(129, 199, 190);
    width: 35px;
    height: 35px;
    margin-right: 3.25%;
  }
`;
export const DivTitle = styled.div`
  display: flex;
`;
export const Texto1 = styled.h1`
  color: rgb(74, 163, 151);
  font-size: 2vw;
`;
export const Texto2 = styled.h1`
  color: rgb(117, 49, 146);
  font-size: 2vw;
`;
