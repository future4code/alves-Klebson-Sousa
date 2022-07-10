import styled from "styled-components";

export const Section = styled.section`
  padding: 20px 20px 0px;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  -webkit-box-pack: end;
  justify-content: flex-end;
  height: 80vh;
  h3 {
    font-family: "Roboto", sans-serif;
  }
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
  -webkit-box-align: center;
  align-items: center;
  padding: 10px 0px;
`;
export const BotonLike = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 1px solid green;
  transform: scale(0.7);
  transition: all 0.2s ease 0s;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: green;
  }
  svg {
    color: green;
    background-color: transparent;
    background: none;
    font-size: 3em;
    :hover {
      color: white;
    }
  }
`;
export const BotonDislike = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 1px solid red;
  transform: scale(0.7);
  transition: all 0.2s ease 0s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  font-size: 3em;
  :hover {
    background-color: red;
    color: white;
  }
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
