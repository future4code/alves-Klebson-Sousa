import axios from "axios";
import React, { Component } from "react";
import Formulario from "./components/Formulario";
import Busca from "./components/Busca";
import DetalheUsuario from "./components/DetalheUsuario";
import {Main} from "./components/Styled.js"


export default class App extends Component {
  state = {
    listaUsuarios: [],
    nomeUsuario: "",
    emailUsuario: "",
    erro: "",
    telaInicial: "Formulario",
  };
  mudaTela = (telaEscolhida) => {
    this.setState({ telaInicial: telaEscolhida });
  };
  exibirTela = () => {
    if (this.state.telaInicial === "Formulario") {
      return (
        <Formulario
          mudaTela={this.mudaTela}
          nomeUsuario={this.state.nomeUsuario}
          emailUsuario={this.state.emailUsuario}
          criarNovoUsuario={this.criarNovoUsuario}
          onChangeUsuario={this.onChangeUsuario}
          onChangeEmail={this.onChangeEmail}
        />
      );
    } else if (this.state.telaInicial === "Busca") {
      return (
        <Busca
          mudaTela={this.mudaTela}
          listaUsuarios={this.state.listaUsuarios}
          pegarUsuario={this.pegarUsuario}
          removerUsuario={this.removerUsuario}
        />
      );
    } else if (this.state.telaInicial === "DetalheUsuario") {
      return <DetalheUsuario 
      mudaTela={this.mudaTela} 
      listaUsuarios={this.state.listaUsuarios}
      pegarUsuario={this.pegarUsuario}
      />;
    } else {
      return <div>Erro! Página não encontrada</div>;
    }
  };

  // Outra forma de renderizar tela com switch case:
  // exibirTela = () => {
  //   switch (this.state.telaInicial) {
  //     case "Formulario":
  //       return <Formulario
  //       mudaTela={this.mudaTela}
  //       nomeUsuario={this.state.nomeUsuario}
  //       emailUsuario={this.state.emailUsuario}
  //       criarNovoUsuario={this.criarNovoUsuario}
  //       onChangeUsuario={this.onChangeUsuario}
  //       onChangeEmail={this.onChangeEmail}
  //     />
  //     case "Busca":
  //       return <Busca
  //       mudaTela={this.mudaTela}
  //       listaUsuarios={this.state.listaUsuarios}
  //       pegarUsuario={this.pegarUsuario}
  //       removerUsuario={this.removerUsuario}
  //     />
  //        case "DetalheUsuario":
  //          return <DetalheUsuario
  //          mudaTela={this.mudaTela
  //          />
  //     default:
  //       return <div>Erro! Página não encontrada</div>
  //   }
  // }

  componentDidMount() {
    this.pegarUsuario();
  }
  componentDidUpdate() {
    this.pegarUsuario()
  }

  // pegarUsuario = () => {
  //   axios
  //     .get(
  //       "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
  //       {
  //         headers: {
  //           Authorization: "klebson-bicalho-alves",
  //         },
  //       }
  //     )
  //     .then((resposta) => {       
  //       this.setState({ listaUsuarios: resposta.data });
  //     })
  //     .catch((erro) => {
  //       console.log(erro.response.data);
  //       this.setState({ erro: erro.response.data });
  //     });
  // };
  pegarUsuario = async () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    try {
      const resposta = await axios.get(url, {
        headers: {
          Authorization: "klebson-bicalho-alves"
        }
      })
      this.setState({listaUsuarios: resposta.data})
    }
    catch (erro) {
      alert("Ocorreu um erro, tente novamente")
    }
  }


  criarNovoUsuario = () => {
    const novoNomeUsuario = {
      name: this.state.nomeUsuario,
      email: this.state.emailUsuario,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        novoNomeUsuario,
        {
          headers: {
            Authorization: "klebson-bicalho-alves",
          },
        }
      )
      .then((resposta) => {
        alert("Usuário(a) cadastrado(a) com sucesso!");
        this.setState({ nomeUsuario: "", emailUsuario: "" });
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };
  onChangeUsuario = (event) => {
    this.setState({ nomeUsuario: event.target.value });
  };
  onChangeEmail = (event) => {
    this.setState({ emailUsuario: event.target.value });
  };
  removerUsuario = (id) => {
    if (window.confirm("Tem certeza de que deseja deletar?"))
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          {
            headers: {
              Authorization: "klebson-bicalho-alves",
            },
          }
        )
        .then((resposta) => {
          alert("Usuário removido");
          this.pegarUsuario();
        })
        .catch((erro) => {
          alert(erro.response.data);
        });
  };
  render() {
    return <Main>{this.exibirTela()}</Main>;
  }
}
