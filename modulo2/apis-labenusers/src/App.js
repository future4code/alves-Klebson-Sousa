import axios from "axios";
import React, { Component } from "react";
import Formulario from "./components/Formulario";
import Busca from "./components/Busca";

export default class App extends Component {
  state = {
    listaUsuarios: [],
    nomeUsuario: "",
    emailUsuario: "",
    erro: "",
    trocarTela: "Formulario",
  };
  mudaTela = (telaEscolhida) => {
    this.setState({ trocarTela: telaEscolhida });
  };
  exibirFormulario = () => {
    if (this.state.trocarTela === "Formulario") {
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
    } else if (this.state.trocarTela === "Busca") {
      return (
        <Busca
          mudaTela={this.mudaTela}
          listaUsuarios={this.state.listaUsuarios}
          pegarUsuario={this.pegarUsuario}
          removerUsuario={this.removerUsuario}
        />
      );
    }
  };
  pegarUsuario = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "klebson-bicalho-alves",
          },
        }
      )
      .then((resposta) => {
        console.log(resposta.data);
        this.setState({ listaUsuarios: resposta.data /*.result.list*/ });
      })
      .catch((erro) => {
        console.log(erro.response.data);
        this.setState({ erro: erro.response.data });
      });
  };

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
        alert("Usuário cadastrado com sucesso:");
        // this.pegarNome();
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
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "klebson-bicalho-alves",
          }
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
    return (<div>{this.exibirFormulario()}</div>
    )
  }
}
