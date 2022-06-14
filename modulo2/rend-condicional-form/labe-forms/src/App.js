import React from 'react';
import styled from 'styled-components';
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from"./components/Etapa3"
import Final from "./components/Final"

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
`

export default class App extends React.Component {
  state = {
    proximaEtapa: "etapa1"
  }
  exibeEtapa1 = () => {
    if (this.state.proximaEtapa === "etapa1") {
      return <Etapa1 mudaTela = {this.mudaTela} />
    }
    else if (this.state.proximaEtapa === "etapa2") {
      return <Etapa2 mudaTela = {this.mudaTela} />
    }
    else if (this.state.proximaEtapa === "etapa3") {
      return <Etapa3 mudaTela = {this.mudaTela} />
    }
    else {
      return <Final mudaTela = {this.mudaTela} />
    }
  }
  mudaTela = (etapaEscolhida) => {
    this.setState({proximaEtapa: etapaEscolhida})
  }

render() {
   return (
    <Body>    
      {this.exibeEtapa1()}
    </Body>
  );
}
 
}


