import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  border: solid 1px black;
  margin: 10px;
  flex-direction: column;
  box-shadow: 6px 6px;
  max-width: 400px;
  width: 100%;
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
    justify-content: space-between;
    gap: 20px;
  }

`;
