import pokemonApi from "pokemon/sm/pokemonApi";

const pokemonListApi = pokemonApi.injectEndpoints({
  endpoints: (build) => ({
    getPokemonByName: build.query<pokemon.Pokemon, string>({
      query: (name) => {
        return {
          url: `pokemon/${name}`,
          method: 'get',
        };
      },
    }),
  }),
});

export const {
  useGetPokemonByNameQuery,
} = pokemonListApi;

export default pokemonListApi;
