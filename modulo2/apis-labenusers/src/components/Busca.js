import React, { Component } from 'react'
import axios from "axios";
import {MainContainer, DivFilter, ListUser, Button} from "./Styled.js"

export default class Busca extends Component {

  render() {
    const listaUsuarios = this.props.listaUsuarios.map((usuario) => {
        return <ListUser key={usuario.id}>
            <a>{usuario.name}</a> 
            <Button onClick={() => this.props.removerUsuario(usuario.id)}>Remover</Button>
        </ListUser>
    })
    return (
      <MainContainer>
        <div>
            <h2>Tela de lista de usuários</h2>
            <Button onClick={() => this.props.mudaTela("DetalheUsuario")}>Ir para detalhes</Button>
            {/* <button onClick={() => this.props.pegarUsuario()}>Exibir lista</button> */}
            {listaUsuarios}
        <DivFilter>
            <input placeholder='Nome exato para busca'/>
            <Button>Salvar edição</Button>
        </DivFilter>
        </div>
        <hr/>
      </MainContainer>
    )
  }
}
