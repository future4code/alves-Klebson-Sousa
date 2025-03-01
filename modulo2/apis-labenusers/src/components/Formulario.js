import React, { Component } from "react";
import axios from "axios";
import {MainForms, DivButton, Header, Button} from "./Styled.js" 

export default class Formulario extends Component {
  render() {
    return (
      <MainForms>
        <h2>Tela de cadastro de usuário</h2>
        <DivButton>
          <Button onClick={() => this.props.mudaTela("Busca")}>
            Mudar para de lista de usuários
          </Button>
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
          <Button onClick={() => this.props.criarNovoUsuario()}>
            Cadastrar usuário
          </Button>
        </Header>
      </MainForms>
    );
  }
}
