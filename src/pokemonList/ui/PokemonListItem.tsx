import Pokemon from "pokemon/ui/Pokemon";
import { useGetPokemonByNameQuery } from "../sm/pokemonListApi";

export interface PokemonListItemProps {
  name: string;
  pollingInterval: number;
}

const PokemonListItem = (props: PokemonListItemProps) => {
  const { name, pollingInterval } = props;
  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(
    name,
    {
      pollingInterval,
    },
  );

  return (
    <Pokemon
      data={data}
      error={error}
      isLoading={isLoading}
      isFetching={isFetching}
    />
  );
};

export default PokemonListItem;
