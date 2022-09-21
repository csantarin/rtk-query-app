import { useGetPikachuQuery } from 'pikachu/sm/pikachuApi';
import Pokemon from 'pokemon/ui/Pokemon';
import React from 'react';

const PikachuRtkQueryHook = () => {
  const { data, error, isLoading, isFetching } = useGetPikachuQuery('rtkQueryHook');

  return (
    <div>
      <h2>RTK Query Hook</h2>
      <Pokemon
        data={data}
        error={error}
        isLoading={isLoading}
        isFetching={isFetching}
      />
    </div>
  );
};

export default PikachuRtkQueryHook;
