import React, { Component } from "react";
import axios from "axios";
import {CardList, MainPlayList, DivButton} from "../staledApp"


export default class PlayList extends Component {
  componentDidMount() {
    this.props.pegarLista();
  }

  removerLista = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: "klebson-bicalho-alves",
        },
      })
      .then((resposta) => {
        this.props.pegarLista();
        alert("Lista deletada!");
      })
      .catch((err) => {
        console.log(err.resposta.data);
      });
  };

  render() {
    const listasAlbum = this.props.albumDeMusicas.map((lista) => {
      return (
        <CardList key={lista.id}>
          <p>Gênero: {lista.name}</p>
          <DivButton>
            <button onClick={() => this.props.musicasOnClick(lista.id)}>
              Ir para Músicas
            </button>
            <button onClick={() => this.removerLista(lista.id)}>
              Delete List
            </button>
          </DivButton>
        </CardList>
      );
    });
    return (
      <MainPlayList>
        <h2>Minhas play Lists</h2>
        <button onClick={() => this.props.mudarTela("Home")}>
          Ir Para Início
        </button>
        {listasAlbum}
      </MainPlayList>
    );
  }
}
