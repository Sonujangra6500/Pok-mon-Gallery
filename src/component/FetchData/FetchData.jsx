import { useEffect, useState } from "react";
import { typeColors } from "../../Utlis/constant";
import { Link } from "react-router-dom";
const FetchData = ({ name }) => {
  const [data, setData] = useState([""]); // Set initial state to null to avoid accessing properties on undefined
  const [loading, setLoading] = useState(true); // State to manage loading
  const getPokeImage = async (pokemonName) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Stop loading when the data fetch is done
    }
  };

  useEffect(() => {
    getPokeImage(name);
  }, [name]); // Add name as a dependency to refetch when it changes

  const firstType = data?.types?.[0]?.type?.name;
  const bgColor = typeColors[firstType]?.bg || "from-gray-700 to-gray-900";
  const hoverColor =
    typeColors[firstType]?.hover || "hover:from-gray-600 hover:to-gray-800";

  if (loading) {
    return <div>Loading...</div>; // Display loading state
  }

  if (!data) {
    return <div>Error: Pokémon not found</div>; // Handle case where data is not found
  }

  return (
    <Link to={`/pokemon/${name}`} state={{ pokemonData: data }}>
      <div className="flex flex-wrap gap-8">
        <div
          key={name}
          className={`rounded-lg shadow-lg p-8 max-w-sm mx-auto bg-gradient-to-br ${bgColor} ${hoverColor} hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer`}
        >
          <img
            className="w-48 h-48 mx-auto mb-6"
            src={data.sprites.other["official-artwork"].front_default}
            alt={`${name} official artwork`}
          />
          <h1 className="text-3xl font-bold text-center mb-4 text-white capitalize">
            {name}
          </h1>
          <h2 className="text-center">
            {data?.types?.map((types) => {
              return (
                <span
                  key={types.type.name}
                  className="inline-block bg-black rounded-full px-4 py-2 text-lg font-semibold text-white mx-2 shadow-md"
                >
                  {types.type.name}
                </span>
              );
            })}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default FetchData;
