import React from 'react';
// import './CardeGande.css'
import {DivPai, Imagem} from "./styled"

function CardGrande(props) {
    return (
        <DivPai>
            <Imagem src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </DivPai>
    )
}

export default CardGrande;