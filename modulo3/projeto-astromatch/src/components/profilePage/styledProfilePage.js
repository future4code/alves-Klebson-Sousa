import styled from "styled-components";

export const Section = styled.section`
  padding: 20px 20px 0px;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  -webkit-box-pack: end;
  justify-content: flex-end;
  height: 80vh;
`;
export const DivMatch = styled.div`
  box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.5s ease 0s;
  height: 430px;
  animation: 0.5s ease 0s 1 normal forwards running none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;
export const Selectors = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* -webkit-box-align: center; */
  align-items: center;
  padding: 10px 0px;
`;
export const BotonLik = styled.button`
  /* width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid green;
  color: green;
  :hover {
    background-color: green;
    color: white;
  } */
  border-radius: 50%;
    width: 80px;
    height: 80px;
    border: 1px solid green;
    color: green;
    font-size: 50px;
    transform: scale(0.7);
    transition: all 0.2s ease 0s;
    position: relative;
    box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Texto = styled.div`
  height: 30%;
  position: absolute;
  bottom: 0;
  width: 92%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  color: white;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding: 15px;
  z-index: 2;
`;
