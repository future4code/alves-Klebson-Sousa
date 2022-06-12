import styled from "styled-components";
import React from "react";
import Avatar from "./Components/img/avatar.png"

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  margin-top: 0;
`;
const Heder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  padding: 20px 0;
  background-color: #f0f2f5;
`
const ImgAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
`
const Chat = styled.div`
  width: 60%;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  overflow-y: hidden;
  background-color: #eae6df;
`;
const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  width: 60%;
  padding: 25px 0;
  background-color: #f0f2f5;
`;
const Input1 = styled.input`
  width: 25%;
  padding: auto;
  background-color: #ffffff;
  border-radius: 5%;
`;
const Input2 = styled.input`
  width: 60%;
  padding: auto;
  background-color: #ffffff;
`;
const Botao = styled.button`
  background-color: #ffffff;
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
      const nome = usuario.nome.toLowerCase();
      if (nome === "eu") {
        return <p>{usuario.mensagem}</p>;
      } else {
        return (
          <p>
            <strong>{usuario.nome}:</strong> {usuario.mensagem}
          </p>
        );
      }
    });

    return (
      <MainContainer>
        <Heder>
          <ImgAvatar src={Avatar} alt="Imagem do usuário"/>
        </Heder>
        <Chat>
          {listaComponentes}
          </Chat>
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
      </MainContainer>
    );
  }
}
export default App;
