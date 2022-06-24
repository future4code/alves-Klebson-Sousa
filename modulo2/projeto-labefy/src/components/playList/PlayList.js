import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const CardList = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
`;

export default class PlayList extends Component {
  state = {
    albumDeMusicas: [],
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
        console.log(resposta);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const listasAlbum = this.state.albumDeMusicas.map((lista) => {
      return <CardList>{lista.name}</CardList>;
    });
    return (
      <div>
        <button onClick={this.props.irParaHome}>Ir para Home</button>
        <h1>Minhas play Lists</h1>
        {listasAlbum}
      </div>
    );
  }
}
