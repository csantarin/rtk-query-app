import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import React from 'react';

export interface PokemonProps {
  data?: pokemon.Pokemon | undefined;
  error?: FetchBaseQueryError | SerializedError | undefined;
  isLoading?: boolean | undefined;
  isFetching?: boolean | undefined;
}

const Pokemon = (props: PokemonProps) => {
  const { data, error, isLoading, isFetching } = props;
  return (
    <>
      {error ? (
        <div>Oh no, there was an error</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : data ? (
        <div>
          <h3>
            {data.species.name} {isFetching ? "..." : ""}
          </h3>
          <img src={data.sprites.front_shiny!} alt={data.species.name} />
        </div>
      ) : null}
    </>
  );
}

export default Pokemon;
