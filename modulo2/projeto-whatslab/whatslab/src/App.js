import styled from "styled-components";
import React from "react";
import { MainContainer, Header, ImgAvatar, MessageArea, Chat, Chat2, Footer, 
Input1, Input2, Botao } from "./Components/Styled.js"
import Avatar from "./Components/img/avatar.png";
import "./Components/EnterBotao.js"



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
      const nome = usuario.nome.toLowerCase();
      if (nome === "eu") {
        return (
          <Chat2>
            <p>{usuario.mensagem}</p>
          </Chat2>
        );
      } else {
        return (
          <Chat>
            <p>
              <strong>{usuario.nome}:</strong> {usuario.mensagem}
            </p>
          </Chat>
        );
      }
    });

    return (
      <MainContainer>
        <Header>
          <ImgAvatar src={Avatar} alt="Imagem do usuário" />
        </Header>
        <MessageArea>{listaComponentes}</MessageArea>
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
          <Botao onClick={this.adicionarUsuario} id="send">Enviar</Botao>
        </Footer>
      </MainContainer>
    );
  }
}
export default App;
