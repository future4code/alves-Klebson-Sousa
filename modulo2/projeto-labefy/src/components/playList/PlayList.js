import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
`;

export default class PlayList extends Component {
  state = {
    albumDeMusicas: [],
    inputMusica: "",
    inputArtist: "",
    inputUrl: "",
    err: ""
  };
  componentDidMount() {
    this.pegarLista();
  }
  pegarLista = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    axios
      .get(url, {
        headers: {
          Authorization: "klebson-bicalho-alves",
        },
      })
      .then((resposta) => {
        this.setState({ albumDeMusicas: resposta.data.result.list });
      })
      .catch((err) => {
        alert("Ocorreu um erro, tente novamente!");
      });
  };
  removerLista = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: "klebson-bicalho-alves",
        },
      })
      .then((resposta) => {
        this.pegarLista();
        alert("Lista deletada!");
      })
      .catch((err) => {
        console.log(err.resposta.data);
      });
  };
  adicionarMusica = (id) => {
    const url = `ttps://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const body = {
      name: this.state.inputMusica,
      artist: this.state.inputArtist,
      url: this.state.inputUrl,
    };
    axios
      .post(url, body, {
        headers: {
          Authorization: "klebson-bicalho-alves",
        },
      })
      .then((resposta) => {
        alert("Música adicionada com sucesso!");
        console.log(resposta.data.result.tracks);
        this.setState({ inputMusica: ""});
        this.setState({ inputArtist: ""});
        this.setState({ inputUrl: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  onChangeArtist = (e) => {
    this.setState({ inputArtist: e.target.value });
  };
  onChangeUrl = (e) => {
    this.setState({ inputUrl: e.target.value });
  };
  onChangeMusica = (e) => {
    this.setState({ inputMusica: e.target.value });
  };

  render() {
    const listasAlbum = this.state.albumDeMusicas.map((lista) => {
      return (
        <CardList key={lista.id}>
          <p>Gênero: {lista.name}</p>
          <div>
            <button onClick={() => this.adicionarMusica(lista.id)}>
              Save Music
            </button>
            <button onClick={() => this.removerLista(lista.id)}>
              Delete List
            </button>
          </div>
        </CardList>
      );
    });
    return (
      <div>
        <button onClick={() => this.props.mudarTela("Musicas")}>
          Ir para Músicas
        </button>
        <h2>Minhas play Lists</h2>
        <div>
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
        </div>
        {listasAlbum}
      </div>
    );
  }
}
