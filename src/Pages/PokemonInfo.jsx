import React from "react";
import { useLocation, useParams } from "react-router-dom";
import PokeLeftInfo from "../component/PokeLeftInfo";
import PokeRightInfo from "../component/PokeRightInfo";

const PokemonInfo = () => {
  const { state } = useLocation();
  const pokemonData = state?.pokemonData;
  const { name } = useParams();
  return (
    <div className="flex">
      <PokeLeftInfo name={name} pokemonData={pokemonData} />
      <PokeRightInfo name={name} pokemonData={pokemonData} />
    </div>
  );
};

export default PokemonInfo;
