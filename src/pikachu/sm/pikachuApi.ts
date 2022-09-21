import pokemonApi from 'pokemon/sm/pokemonApi';
import createRtkQueryFetch from 'reduxToolkit/util/createRtkQueryFetch';

const pikachuApi = pokemonApi.injectEndpoints({
  endpoints: (build) => ({
    getPikachu: build.query<pokemon.Pokemon, 'reduxSaga' | 'rtkQueryHook'>({
      query: (method) => {
        return {
          url: `pokemon/pikachu?method=${method}`,
          method: 'get',
        };
      },
    }),
  }),
});

export const {
  useGetPikachuQuery,
} = pikachuApi;

/**
 * `async...await` conversion.
 */
export const getPikachu = createRtkQueryFetch.query(pikachuApi.endpoints.getPikachu.initiate);

export default pikachuApi;
