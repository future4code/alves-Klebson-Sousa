import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex; 
  justify-content: center; 
  border: solid 1px black;
  margin: 10px;
  flex-direction: column;
  box-shadow: 6px 6px 6px #969696;
  max-width: 380px;
  width: 100%;
  border-radius: 20px;
  max-height: 330px;

  p {
    margin: 10px;
  }
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;     
    overflow: auto;
  }

`;

export const NavButton = styled.div`
  display: flex;
`
