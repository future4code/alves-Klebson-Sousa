import React, { Component } from 'react'
import axios from 'axios'

export default class CreateList extends Component {
    state = {
      // listasMusicas: [],
      inputListaMusica: ""
    }
    // componentDidMount(){
      // criarListaMusica()
    // }
    // adicionarListaMusica = () => {
    //   const novaLista = [...this.state.listasMusicas, imputListaMusica]
    //   this.setState({listasMusicas: novaLista})  
    // }

    onChangeNomeLista = (e) =>{
      this.setState({inputListaMusica: e.target.value})
    }
    criarListaMusica = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
      const body = {
        name:this.state.inputListaMusica
      }
      axios.post(url, body, {
        headers:{
          Authorization: "klebson-bicalho-alves"
        }
      })
      .then((resposta) => {
        this.setState({inputListaMusica: ""})
      })
      .catch((err) =>{
        console.log(err.reponse.data)
      })
    }

  render() {
    return (
      <div>
        <h1>Crie sua Play List</h1>
        <input 
        value={this.state.inputListaMusica}
        onChange={this.onChangeNomeLista}
        placeholder='Nome da lista'/>
        <button onClick={this.criarListaMusica}>Salvar</button>
        <button onClick={this.props.irParaPlayList}>Ir para Play List</button>
        </div>
    )
  }
}
