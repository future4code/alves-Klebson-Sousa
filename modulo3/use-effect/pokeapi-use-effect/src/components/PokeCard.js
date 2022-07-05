import axios from "axios";
import { useEffect, useState } from "react";

function PokeCard(props) {
  // Passo 4b
  // Implementa suas variáveis de estado aqui.
  const [pokemon, setPokemon] = useState({});

  // Passo 4c
  useEffect(() => {
    pegaPokemon(props.pokeName);
  }, []);

  // Passo 4c
  useEffect(
    (prevProps) => {
      if (pokemon !== props.pokeName) {
        pegaPokemon(props.pokeName);
      }
    },
    [props.pokeName]
  );

  // Passo 4c
  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <figure>
      {/* Passo 4d */}
      <strong>{pokemon.name && pokemon.name.toUpperCase()}</strong>
      {/* Passo 4d */}
      <p>Peso: {pokemon.weight} Kg</p>
      {/* Passo 4d */}
      <p>Tipo: {pokemon.types && pokemon.types[0].type.name}</p>
      {/* Passo 4d */}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </figure>
  );
}

export default PokeCard;
