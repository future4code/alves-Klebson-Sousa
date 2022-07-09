import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    padding: 10px;
    img {
      height: 100%;
      width: 50px;
      margin-right: 10px;
      border-radius: 50%;
      border-top-left-radius: 50%;
      cursor: pointer;
    }
  }
`;