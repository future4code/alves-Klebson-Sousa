import React, { Component } from "react";
import axios from "axios";

export default class CreateList extends Component {
  state = {
    // inputMusica: "",
    // inputArtist: "",
    // inputUrl: "",
    inputListaMusica: "",
  };

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
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  };
  // adicionarMusica = (id) => {
  //   const url = `ttps://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
  //   const body = {
  //     name: this.state.inputMusica,
  //     artist: this.state.inputArtist,
  //     url: this.state.inputUrl,
  //   };
  //   axios
  //     .post(url, body, {
  //       headers: {
  //         Authorization: "klebson-bicalho-alves",
  //       },
  //     })
  //     .then((resposta) => {
  //       alert("Lista criada com sucesso!");
  //       this.setState({ inputMusica: "", inputArtist: "", inputUrl: "" });
  //     })
  //     .catch((err) => {
  //       console.log(err.reponse.data);
  //     });
  // };
  // onChangeArtist = (e) => {
  //   this.setState({ inputArtist: e.target.value });
  // };
  // onChangeUrl = (e) => {
  //   this.setState({ inputUrl: e.target.value });
  // };
  // onChangeMusica = (e) => {
  //   this.setState({ inputMusica: e.target.value });
  // };

  render() {
    return (
      <div>
        <h2>Crie sua Play List</h2>
        <div>
          <input
            value={this.state.inputListaMusica}
            onChange={this.onChangeNomeLista}
            placeholder="Nome da lista"
          />
          <button onClick={this.criarListaMusica}>Save List</button>
        </div>
        <hr />
        {/* <div>
          <input
            value={this.state.inputMusica}
            onChange={this.onChangeMusica}
            placeholder="Music"
          />
          <input
            value={this.state.inputArtist}
            onChange={this.onChangeArtist}
            placeholder="Artist"
          />
          <input
            value={this.state.inputUrl}
            onChange={this.onChangeUrl}
            placeholder="Link"
          />
          <button onClick={() => this.adicionarMusica()}>Save Music</button>
        </div> */}
        <button onClick={() => this.props.mudarTela("Detail")}>
          Ir para Play List
        </button>
      </div>
    );
  }
}
