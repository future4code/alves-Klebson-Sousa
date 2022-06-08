import React from 'react';
import { MinicardPai, MiniImagem, MinicardFilho } from './styled';

function CardPequeno(props) {
    return (
        <MinicardPai>
            <MiniImagem src={ props.imagem } />
            <MinicardFilho div>
                <h4>{ props.texto }</h4>
                <p>{ props.descricao }</p>
            </MinicardFilho>
        </MinicardPai>
    )
}

export default CardPequeno;