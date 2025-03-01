import React, { Component } from "react";
import axios from "axios";
import {MainInitial, InputButon} from "../staledApp"

export default class CreateList extends Component {
  state = {
    inputListaMusica: "",
  };
  componentDidMount() {
    this.props.pegarLista();
  }
  onChangeNomeLista = (e) => {
    this.setState({ inputListaMusica: e.target.value });
  };
  criarListaMusica = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.inputListaMusica,
    };
    axios
      .post(url, body, {
        headers: {
          Authorization: "klebson-bicalho-alves",
        },
      })
      .then((resposta) => {
        alert("Lista criada com sucesso!");
        this.setState({ inputListaMusica: "" });
        console.log(resposta.data);
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  };

  render() {
    return (
      <MainInitial>
        <h2>Crie sua Play List</h2>
        <InputButon>
          <input
            value={this.state.inputListaMusica}
            onChange={this.onChangeNomeLista}
            placeholder="Nome da lista"
          />
          <button onClick={this.criarListaMusica}>Save List</button>
        </InputButon>
        <hr />
        <button onClick={() => this.props.mudarTela("Detail")}>
          Ir para Play List
        </button>
      </MainInitial>
    );
  }
}
