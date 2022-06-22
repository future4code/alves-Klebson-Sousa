import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  button {
  }
`;

export const Header = styled.div`
  display: flex;
`;

export default class Formulario extends Component {
  render() {
    // const nomeUsuario = this.props.nomeUsuario.map((usuario) => {
    //     return <div key={usuario.id}>
    //         {usuario.name}
    //     </div>
    // });

    return (
      <Main>
        <h2>Tela de cadastro de usuário</h2>
        <DivButton>
          <button onClick={() => this.props.mudaTela("Busca")}>
            Trocar de tela
          </button>
        </DivButton>

        <Header>
          <input
            value={this.props.nomeUsuario}
            onChange={this.props.onChangeUsuario}
            placeholder="Nome"
          />
          <input
            value={this.props.emailUsuario}
            onChange={this.props.onChangeEmail}
            placeholder="E-mail"
          />
          <button onClick={() => this.props.criarNovoUsuario()}>
            Criar usuário
          </button>
        </Header>
      </Main>
    );
  }
}
