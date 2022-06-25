import styled from "styled-components";
import ImagemFundo from "./img/ImagemFundo.jpg"

export const Button = styled.button`
  padding: 7px;
  border-radius: 50px;
`
// Styled APP
export const Main = styled.div`
  background-image: url(${ImagemFundo});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-position: center;
`;

// Styled DetalheUsuario
export const MainDetalhe = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0;
margin: 0;
`;

// Styled Formulario
export const MainForms = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
`;
export const DivButton = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 10px;
button {
}
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

// Styled Busca
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  padding: 10px;

`
export const DivFilter =styled.div`  
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
`
export const ListUser = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  margin-top: 10px;
  width: 300px;
`