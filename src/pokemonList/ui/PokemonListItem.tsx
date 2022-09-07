import { useGetPokemonByNameQuery } from "../sm/pokemonListApi";

export interface PokemonProps {
  name: string;
  pollingInterval: number;
}

const PokemonListItem = (props: PokemonProps) => {
  const { name, pollingInterval } = props;
  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(
    name,
    {
      pollingInterval,
    },
  );

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>
            {data.species.name} {isFetching ? "..." : ""}
          </h3>
          <img src={data.sprites.front_shiny!} alt={data.species.name} />
        </>
      ) : null}
    </>
  );
};

export default PokemonListItem;
