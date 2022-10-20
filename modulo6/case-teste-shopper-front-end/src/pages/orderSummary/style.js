import styled from "styled-components";

export const ContainerSection = styled.section`
  width: 30%;  
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0%;
  right: 0%;
  background-color: white;
`;
export const Section = styled.section`
  overflow: auto;
  width: 100%;
  max-height: 64vh;
  display: flex;
  flex-direction: column; 
  background-color: white;
  overflow: auto;
 
`;

export const DivTitle = styled.div`
  padding: 10px;
  display: flex;
  /* grid-template-columns: 24px 1fr 24px; */
  justify-content: space-around;
  width: 100%; 
`;

export const TitleOrder = styled.h2`
  text-align: center;
  font-size: 1.5em;
`;

export const TotalOrder = styled.h2`
  font-size: 1.5em;
  padding: 10px;
`;

export const ButtonFinish = styled.button`
  position: relative;
  font-weight: 700;
  font-size: 1.5em;
  padding: 14px 13px;
  width: 100%;
  background-color: rgb(45, 167, 122);
  border-radius: 0 0 10px 10px;
  border: none;
  color: white;
  :hover {
    background-color: rgb(20, 141, 96);
  }
`;

export const CartButton = styled.img`
  height: 5vh;
  margin-top: 5px;
  :hover{
    cursor: pointer;
    transform: scale(1.2)
  }
`
