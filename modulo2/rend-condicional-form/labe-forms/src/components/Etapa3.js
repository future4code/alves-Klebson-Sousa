import React from "react";
import {MainContainer, Section, Botao} from "./Styled"

export default class Etapa3 extends React.Component {
    state = {
        textoExplicativo: "",
        cursoComplementar: "",
    }
    onChangeTexto = (event) => {
        this.setState({textoExplicativo: event.target.value})
    }
    onChangeCursoComplementar = (event) => {
        this.setState({cursoComplementar: event.target.value})
    }
  render() {
    return (
      <MainContainer>
        <h3>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <Section>
          <p>5. Por que você não terminou o curso?</p>
          <input
          value={this.state.textoExplicativo}
          placeholder="Faça um pequeno resumo"
          onChange={this.onChangeTexto}
          />
        </Section>
        <Section>
          <p>6. Você fez algum curso complementar?</p>
          <select>
            <option value="nenhum">Nenhum</option>
            <option value="cursoTecnico">Curso técnico</option>
            <option value="cursoIngles">Curso de inglês</option>
          </select>   
          
        </Section>
        <Botao onClick={() => this.props.mudaTela()}>Próxima etapa</Botao>
      </MainContainer>
    );
  }
}
