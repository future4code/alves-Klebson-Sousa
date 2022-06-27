import React, { Component } from "react";
import axios from "axios";
import {MainListMusic, ContainerMusica} from "../staledApp"

export default class ListMusic extends Component {
  state = {
    inputMusica: "",
    inputArtist: "",
    inputUrl: "",
  };
  componentDidMount() {
    this.props.pegarMusicasDoAlbum();
  }
  adicionarMusica = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
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
        this.props.pegarMusicasDoAlbum(id);
        this.setState({ inputMusica: "" });
        this.setState({ inputArtist: "" });
        this.setState({ inputUrl: "" });
      })
      .catch((err) => {});
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
  removerMusica = (idDoAlbumDeMusicas, id) => {
    if (window.confirm(`Tem certeza que deseja remover a música?`)) {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idDoAlbumDeMusicas}/tracks/${id}`;
      axios
        .delete(url, {
          headers: {
            Authorization: "klebson-bicalho-alves",
          },
        })
        .then((resposta) => {
          this.props.pegarMusicasDoAlbum(idDoAlbumDeMusicas);
          alert("Música deletada!");
        })
        .catch((err) => {
          console.log(err.resposta.data);
        });
    }
  };
  render() {
    console.log(this.props.listaDemusicas);
    const listaDemusicas = this.props.listaDemusicas.map((musica) => {
      return (
        <ContainerMusica key={musica.id}>
          <p>Música: {musica.name}</p>
          <p>Artista: {musica.artist}</p>
          <p>Link: {musica.url}</p>
          <audio ref="audio_tag" src={musica.url} controls />
          <button
            onClick={() =>
              this.removerMusica(this.props.idDoAlbumDeMusicas, musica.id)
            }
          >
            Remover Música
          </button>
        </ContainerMusica>
      );
    });

    return (
      <MainListMusic>
        <h2>Lista de Músicas</h2>
        <button onClick={() => this.props.mudarTela("Detail")}>
          Ir para Play List
        </button>

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
        <button
          onClick={() => this.adicionarMusica(this.props.idDoAlbumDeMusicas)}
        >
          Save Music
        </button>
        {listaDemusicas}
      </MainListMusic>
    );
  }
}
