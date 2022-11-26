import styled from "styled-components";

export const ContainerLi = styled.li`
  display: flex;  
  align-items: center;
  justify-content: space-between;
  border-top: solid #c4c1c1 0.2px;
  border-bottom: solid #c4c1c1 0.2px;
  height: 100px;

  img {
    width: 100px;
    border-radius: 10px;
  }

  button {
    margin-bottom: 0.625rem;
    border: none;
    font-size: 2rem;
    color: blue;
    background-color: transparent;
    cursor: pointer;
    :hover {
      font-weight: bolder;
    }

    :active {
      font-size: 2.5rem;
      margin-bottom: 0.125rem;
    }
  }
`;

export const Section1 = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Section2 = styled.section`
  display: flex;
  align-items: center;
  width: 20%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid lightgray 1px;
    width: 100%;
    border-radius: 5px;
    :hover {
      background-color: lightgray;
    }

    p {
        text-align: center;
    }
  }
`;
export const Price = styled.p`
    text-align: end;
`
export const Section4 = styled.section``;
