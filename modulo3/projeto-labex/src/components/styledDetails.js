import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    overflow: auto;   
  }
  h1 {
    margin: 10px;
  }
`;

export const DetailTrip = styled.div`
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

export const OutstandingCandidates = styled.div`
  display: flex;
  justify-content: center;
  border: solid 1px black;
  margin: 10px;
  flex-direction: column;
  box-shadow: 6px 6px 6px #969696;
  max-width: 400px;  
  border-radius: 20px;
  max-height: auto;
  button {
    width: 70px;
    margin: 10px;    
  }

  p {
    margin: 10px;
  }
`;

export const DivCandidates = styled.div`
    display: flex;
    flex-direction: column;
`