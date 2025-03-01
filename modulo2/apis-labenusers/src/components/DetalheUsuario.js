import React, { Component } from "react";
import axios from "axios";
import {MainDetalhe, Button} from "./Styled.js" 

export default class DetalheUsuario extends Component {
  render() {
    const listaUsuarios = this.props.listaUsuarios.map((usuario) => {
        
    })
    return (
      <MainDetalhe>
        <h2>DetalheUsuario</h2>
        <Button onClick={() => this.props.mudaTela("Formulario")}>
          Retornar para cadastro
        </Button>
      </MainDetalhe>
    );
  }
}
