import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    padding: 10px;
    img {
      max-height: 50px;
      width: 50px;
      margin-right: 10px;
      border-radius: 50%;
      border-top-left-radius: 50%;
      cursor: pointer;
    }
  }
`;
export const H2 = styled.h2`
  font-family: "Roboto", sans-serif;
`