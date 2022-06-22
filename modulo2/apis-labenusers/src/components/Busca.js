import React, { Component } from 'react'
import axios from "axios";

export default class Busca extends Component {
  render() {
    const listaUsuarios = this.props.listaUsuarios.map((usuario) => {
        return <div key={usuario.id}>
            <li>{usuario.name}</li>
            <button onClick={() => this.props.removerUsuario(usuario.id)}>Remover</button>
        </div>
    })
    return (
      <div>
        <div>
            <h2>Tela de lista de usuários</h2>
            <button onClick={() => this.props.mudaTela("Formulario")}>Trocar de tela</button>
            <button onClick={() => this.props.pegarUsuario()}>Exibir lista</button>
            {listaUsuarios}
        </div>
        <hr/>
        <div>
            <input placeholder='Nome exato para busca'/>
            <button>Salvar edição</button>
        </div>
      </div>
    )
  }
}
