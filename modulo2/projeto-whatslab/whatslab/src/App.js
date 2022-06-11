import styled from "styled-components";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import React from "react";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  background-color: #8c9dae;  
  margin-top: 0;
`;
const Header = styled.header`
  width: 60%;
  height: 95vh;
  display: flex;
  align-items: flex-end;
  background-color:  #a1aeb0;
`;
const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  width: 60%;
  height: auto;
`;
const Input1 = styled.input`
  width: 30%;
  padding: auto;
  background-color: #17abd8;
`;
const Input2 = styled.input`
  width: 55%;
  padding: auto;
  background-color: #17abd8;
`;
const Botao = styled.button`
  background-color: #17abd8;
  width: 15%;
`;
class App extends React.Component {
  state = {
    usuarios: [],
    valorInputNome: "",
    valorInputMensagem: "",
  };

  adicionarUsuario = () => {
    const novoUsuario = {
      nome: this.state.valorInputNome,
      mensagem: this.state.valorInputMensagem,
    };
    const outroUsuario = [...this.state.usuarios, novoUsuario];
    this.setState({
      usuarios: outroUsuario,
      valorInputNome: "",
      valorInputMensagem: "",
    });
  };
  onChangeInputUsuario = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };
  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
    const listaComponentes = this.state.usuarios.map((usuario) => {
      return (
        <p>
          <strong>{usuario.nome}:</strong> {usuario.mensagem}
        </p>
      );
    });

    return (
      <MainContainer>
        {/* <div> */}
          <Header>{listaComponentes}</Header>
          <Footer>
            <Input1
              value={this.state.valorInputNome}
              onChange={this.onChangeInputUsuario}
              placeholder={"Nome"}
            />
            <Input2
              value={this.state.valorInputMensagem}
              onChange={this.onChangeInputMensagem}
              placeholder={"Mensagem"}
            />
            <Botao onClick={this.adicionarUsuario}>Enviar</Botao>
          </Footer>
        {/* </div> */}
      </MainContainer>
    );
  }
}
export default App;
