import React, { Component } from "react";
import axios from "axios";
import CreateList from "./components/createList/CreateList";
import PlayList from "./components/playList/PlayList";
import ListMusic from "./components/musicas/ListMusic";
import {Body} from "./components/staledApp"

export default class App extends Component {
  state = {
    albumDeMusicas: [],
    listaDemusicas: [],
    idDoAlbumDeMusicas: [],
    homeScreen: "Home",
  };
  mudarTela = (screen) => {
    this.setState({ homeScreen: screen });
  };
  choosePage = () => {
    switch (this.state.homeScreen) {
      case "Home":
        return (
          <CreateList mudarTela={this.mudarTela} pegarLista={this.pegarLista} />
        );
      case "Detail":
        return (
          <PlayList
            albumDeMusicas={this.state.albumDeMusicas}
            musicasOnClick={this.musicasOnClick}
            pegarLista={this.pegarLista}
            mudarTela={this.mudarTela}
          />
        );
      case "Musica":
        return (
          <ListMusic
            mudarTela={this.mudarTela}
            listaDemusicas={this.state.listaDemusicas}
            pegarMusicasDoAlbum={this.pegarMusicasDoAlbum}
            idDoAlbumDeMusicas={this.state.idDoAlbumDeMusicas}
          />
        );
    }
  };

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
  pegarMusicasDoAlbum = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    axios
      .get(url, {
        headers: {
          Authorization: "klebson-bicalho-alves",
        },
      })
      .then((resposta) => {
        this.setState({ listaDemusicas: resposta.data.result.tracks });
        this.setState({ idDoAlbumDeMusicas: id });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  musicasOnClick = (id) => {
    this.pegarMusicasDoAlbum(id);
    this.mudarTela("Musica");
  };

  render() {
    return <Body>{this.choosePage()}</Body>;
  }
}
