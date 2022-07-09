import styled from "styled-components";

export const MainHeader = styled.div`
  height: 50px;
  border-bottom: 1px solid lightgray;
  display: flex;
  /* -webkit-box-pack: justify; */
  justify-content: space-between;
  /* -webkit-box-align: center; */
  align-items: center;
  /* position: relative; */
  padding: 0px 10px;
  /* flex-shrink: 0; */
`;
export const ButtonMatch = styled.button`
  border-radius: 25px;
  width: 40px;
  height: 40px;
  color: rgb(243, 228, 248);
  background-color: rgb(117, 49, 146);
  border: transparent;
  cursor: pointer;
  :hover {    
    color: rgb(243, 228, 248);
    background-color: rgb(193, 118, 225);
  }
`;
export const ButtonProfile = styled.button`
  border-radius: 25px;
  width: 40px;
  height: 40px;
  color: white;
  border: transparent;
  background-color: rgb(74, 163, 151);
  cursor: pointer;
  :hover {    
    color: black;
    background-color: rgb(129, 199, 190);
  }
`;
