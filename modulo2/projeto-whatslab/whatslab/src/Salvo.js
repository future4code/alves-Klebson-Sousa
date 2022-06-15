// import styled from "styled-components";
// import "./App.css";
// import { createGlobalStyle } from "styled-components";
// import React from "react";

// const MainContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   box-sizing: border-box;
//   flex-direction: row;
//   background-color: blue;
//   width: 80%;
//   margin-top: 0;
// `;
// const Header = styled.header`
//   width: 100%;
//   height: 95vh;
//   background-color: green;
// `;
// const Footer = styled.footer`
//   display: flex;
//   flex-direction: row;
//   width: 600px;
//   height: auto;
// `;
// const Input1 = styled.input`
//   width: 30%;
//   padding: auto;
// `;
// const Input2 = styled.input`
//   width: 55%;
//   padding: auto;
// `;
// const Botao = styled.button`
//   width: 15%;
// `;
// class App extends React.Component {
//   state = {
//     usuarios: [
//       {
//         nome: "",
//         mensagem: "",
//       },
//     ],
//     valorInputNome: "",
//     valorInputMensagem: "",
//   };

//   adicionarUsuario = () => {
//     const novoUsuario = {
//       nome: this.state.valorInputNome,
//       mensagem: this.state.valorInputMensagem,
//     };
//     const outroUsuario = [...this.state.usuarios, novoUsuario];
//     this.setState({
//       usuario: outroUsuario,
//       valorInputNome: "",
//       valorInputMensagem: "",
//     });
//   };
//   onChangeInputUsuario = (event) => {
//     this.setState({ valorInputNome: event.target.value });
//   };
//   onChangeInputMensagem = (event) => {
//     this.setState({ valorInputMensagem: event.target.value });
//   };

//   render() {
//     const listaComponentes = this.state.usuarios.map((usuario) => {
//       return (
//         <p>
//           {usuario.valorInputNome}: {usuario.valorInputMensagem}
//         </p>
//       );
//     });

//     return (
//       <MainContainer>
//         <div>
//           <Header>
//             <h6>{listaComponentes}</h6>
//           </Header>
//           <Footer>
//             <Input1
//               value={this.state.valorInputNome}
//               onChange={this.onChangeInputUsuario}
//               placeholder={"Nome"}
//             />
//             <Input2
//               value={this.state.valorInputMensagem}
//               onChange={this.onChangeInputMensagem}
//               placeholder={"Mensagem"}
//             />
//             <Botao onClick={this.adicionarUsuario}>Enviar</Botao>
//           </Footer>
//         </div>
//       </MainContainer>
//     );
//   }
// }
// export default App;

// function App() {
//   return (

//   );
// }

// export default App;
