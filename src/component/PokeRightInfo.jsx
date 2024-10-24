import React from "react";

const PokeRightInfo = ({ pokemonData }) => {
  return (
    <div className="md:w-1/2 md:pl-10 flex flex-col justify-center text-white bg-black">
      <div className="mb-6">
        <h2 className="text-4xl font-semibold mb-4">Types:</h2>
        <div className="flex flex-wrap gap-3">
          {pokemonData?.types?.map((type) => (
            <span
              key={type.type.name}
              className="inline-block bg-black rounded-full px-4 py-2 text-lg font-semibold text-white mx-2 shadow-md"
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-4xl font-semibold mb-4">Moves:</h2>
        <ul className="list-disc list-inside">
          {pokemonData?.moves?.slice(0, 10).map((move) => (
            <li key={move.move.name} className="text-lg">
              {move.move.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-4xl font-semibold mb-4">Height:</h2>
        <p className="text-lg">{pokemonData.height} decimetres</p>
      </div>

      <div className="mb-6">
        <h2 className="text-4xl font-semibold mb-4">Weight:</h2>
        <p className="text-lg">{pokemonData.weight} hectograms</p>
      </div>

      <div className="mb-6">
        <h2 className="text-4xl font-semibold mb-4">Abilities:</h2>
        <ul className="list-disc list-inside">
          {pokemonData?.abilities?.slice(0, 5).map((ability) => (
            <li key={ability.ability.name} className="text-lg">
              {ability.ability.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-4xl font-semibold mb-4">Base Stats:</h2>
        <ul className="list-disc list-inside">
          {pokemonData?.stats.slice(0, 6).map((stat) => (
            <li key={stat.stat.name} className="text-lg">
              {stat.stat.name}:{" "}
              <span className="font-bold">{stat.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokeRightInfo;
