import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import Jose from "./img/Jose.png";
import Maria from "./img/Maria.png";
import post1 from "./img/post1.png";
import post2 from "./img/post2.png";
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  state = {
    arrayPost: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },

      {
        nomeUsuario: "José",
        fotoUsuario: Jose,
        fotoPost: post1,
      },

      {
        nomeUsuario: "Maria",
        fotoUsuario: Maria,
        fotoPost: post2,
      },
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  };

  adicionarUsuario = () => {
    const novoUsuario = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    };
    const novosUsuarios = [...this.state.arrayPost, novoUsuario];
    this.setState({
      arrayPost: novosUsuarios,
      valorInputNomeUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: "",
    });
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };
  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };
  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaPost = this.state.arrayPost.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });
    return (
      <MainContainer>        
        <input
          value={this.state.valorInputNomeUsuario}
          onChange={this.onChangeInputNomeUsuario}
          placeholder={"Nome Usuario"}
        />
        <input
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"link foto Usuario"}
        />
        <input
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"link foto Post"}
        />        
        <button onClick={this.adicionarUsuario}>Adicionar</button>        
        {listaPost}
      </MainContainer>
    );
  }
}

export default App;
