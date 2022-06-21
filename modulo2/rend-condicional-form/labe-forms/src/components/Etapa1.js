import React from "react";
import {MainContainer, Section, Botao} from "./Styled"

export default class Etapa1 extends React.Component {
  state = {
    valorInputNome: "",
    valorInputIdade: "",
    valorInputEmail: "",
    valorInputEscolaridade: ""
  };
  onChangeNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };
  onChangeIdade = (event) => {
    this.setState({ valorInputIdade: event.target.value });
  };
  onChangeEmail = (event) => {
    this.setState({ valorInputEmail: event.target.value });
  };
  onChangeEscolaridade = (event) => {
    this.setState({ valorInputEscolaridade: event.target.value });
  };

  render() {
    return (
      <div>
        <MainContainer>
          <h3>Etapa 1 - Dados Gerais</h3>
          <Section>
            <p>1. Qual o seu nome?</p>
            <input 
            value={this.state.valorInputNome}
            placeholder={"Nome"}
            onChange={this.onChangeNome}
            />
          </Section>
          <Section>
            <p>2. Qual a sua idade?</p>
            <input
            value={this.state.valorInputIdade}
            placeholder={"Idade"}
            onChange={this.onChangeIdade}
            />
          </Section>
          <Section>
            <p>3. Qual o seu email?</p>
            <input
            value={this.state.valorInputEmail}
            placeholder={"e-mail"}
            onChange={this.onChangeEmail}
            />
          </Section>
          <Section>
            <p>4. Qual a sua escolaridade?</p>
            <select onChange={this.state.valorInputEscolaridade}>
                <option value="ensinoMedioIncompleto">Ensino médio incompleto</option>
                <option value="ensinoMedioCompleto">Ensino médio completo</option>
                <option value="ensinoSuperiorIncompleto">Ensino superior incompleto</option>
                <option value="ensinoSuperiorCompleto">Ensino superior completo</option>
            </select>
          </Section>
          <Botao onClick={() => this.props.mudaTela("etapa2")}>
            Próxima etapa
          </Botao>
        </MainContainer>
      </div>
    );
  }
}
