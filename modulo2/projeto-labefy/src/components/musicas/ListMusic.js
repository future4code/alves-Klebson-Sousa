import React, { Component } from 'react'

export default class ListMusic extends Component {
  render() {
    return (
      <div>
        <h2>Lista de Músicas</h2>
        <button onClick={() => this.props.mudarTela("Home")}>Ir para Home</button>
      </div>
    )
  }
}
