import React from "react";
import {MainContainer, Section, Botao} from "./Styled"

export default class Etapa2 extends React.Component {
    state = {
        curso: "",
        ensino: "",
    }
    onChangeCurso = (event) => {
        this.setState({curso: event.target.value})
    }
    onChangeEnsino = (event) => {
        this.setState({ensino: event.target.value})
    }
  render() {
    return (
      <MainContainer>
        <h3>Etapa2 - INFORMAÇÕES DE ENSINO SUPERIOR</h3>
        <Section>
          <p>5. Qual o curso?</p>
          <input 
          value={this.state.curso}
          placeholder="curso"
          onChange={this.onChangeCurso}
          />
        </Section>
        <Section>
          <p>6. Qual a unidade de ensino?</p>
          <input
          value={this.state.ensino}
          placeholder="unidade de ensino"
          onChange={this.onChangeEnsino}
          />
        </Section>
        <Botao onClick={() => this.props.mudaTela("etapa3")}>
          Próxima etapa
        </Botao>
      </MainContainer>
    );
  }
}
