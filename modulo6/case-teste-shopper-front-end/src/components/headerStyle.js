import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    height: 15vh;
    width: 100%;
    border: none;
    align-items: center;
    justify-content: space-between;  
    border-bottom: solid 1px #ddd;
    background: #fff;
    background-image: linear-gradient(to bottom, #fff 30%, #fff 60%, #002d62 317%);
    img {
        width: 260px;
        height: 80px;
        background: transparent;
    }
`
export const Title = styled.h2`
    text-align: center;
    padding: 10px;
    color: rgb(45, 167, 122);
`
export const ButtonOrder = styled.button`
  width: 8.813rem;
  height: 3rem;
  font-size: 1.2rem;
  margin: 0.313rem;
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
