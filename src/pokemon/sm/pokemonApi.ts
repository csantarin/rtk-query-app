import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_POKEMON_API_BASE_URL,
  }),
  keepUnusedDataFor: 10,
  endpoints: () => ({}),
});

export default pokemonApi;
