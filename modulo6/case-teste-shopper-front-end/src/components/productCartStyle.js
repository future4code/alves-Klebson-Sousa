import styled from "styled-components";

export const Container = styled.li`
  border: solid black 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1.5em;
  width: 18rem;
  height: 23vh;
  box-shadow: 8px 8px 5px rgb(139, 135, 236);
  border: solid 0.5px rgb(139, 135, 236);
  border-radius: 10px;
  @media screen and (min-device-width: 540px) and (max-device-width: 926px) {
    height: 13.4rem; 
    width: 30%;
  }
`;

export const DivButton = styled.div`
  width: 100%;
  display: flex;  
  align-items: center;
  justify-content: center;
`

export const ButtonADD = styled.button`
  padding: 0.35rem;
  width: 8.813rem;
  font-size: 1.5rem;  
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
export const ButtonOrder = styled.button`
  /* padding: 0.35rem; */
  width: 12.813rem;
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

export const Price = styled.p`
  color: rgb(45, 167, 122);    
  font-size: 1.6rem;
  margin-left: 1.3rem;
`;
export const Quantity = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin: 5px;
`;

export const Title = styled.h3`
  margin: 0px;
  text-transform: capitalize;
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin: 5px;
`;