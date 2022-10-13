import styled from "styled-components";

export const Container = styled.li`
  border: solid black 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1em;
  width: 150px;
  align-items: center;
`;

export const ButtonADD = styled.button`
  padding: 2px 0.75rem;
  font-size: 0.75rem;
  height: 1.6rem;
  margin: 5px;
  border-width: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3.125rem;
  border: solid rgb(45, 167, 122) 1.5px;
  background-color: rgb(255, 255, 255);
  color: rgb(45, 167, 122);
  cursor: pointer;
  :hover {
    background-color: rgb(45, 167, 122);
    color: rgb(255, 255, 255);
  }
`;

export const Price = styled.p`
  color: rgb(45, 167, 122);
  line-height: 1;
  display: inline-block;
  vertical-align: middle;
  margin: 0px;
`;
export const Quantity = styled.p`
  font-size: 0.5rem;
  color: #666;
  margin: 5px;
`;

export const Title = styled.p`
  margin: 0px;
  text-transform: capitalize;
  font-size: 0.625rem;
  color: #666;
  text-align: center;
  margin: 5px;
`;