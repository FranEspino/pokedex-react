import React, { useEffect, useState } from "react";
import Pokedex from "./components/Pokedex";
import axios from "axios";
function App() {
  const [pokemon, setPokemon] = useState([]);

  function getRandomPokemon() {
    const randomNum = Math.floor(Math.random() * 1000) + 1;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`).then((resp) => {
      setPokemon(resp.data);
    });
  }

  return <Pokedex pokemon={pokemon} onClickPokedex={getRandomPokemon} />;
}

export default App;
