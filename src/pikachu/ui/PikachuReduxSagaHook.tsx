import pikachuApi from 'pikachu/sm/pikachuApi';
import { pikachuActions } from 'pikachu/sm/pikachuSlice';
import Pokemon from 'pokemon/ui/Pokemon';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PikachuReduxSagaHook = () => {
  // NOTE: There's no equivalent immediate API in imperative RTK Query selectors API. We'll have to write our own logic.
  const { data, error, isLoading, /* isFetching */ } = useSelector(pikachuApi.endpoints.getPikachu.select('reduxSaga'));
  const isFetching = false;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pikachuActions.startGetPikachu());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Redux Saga Hook</h2>
      <Pokemon
        data={data}
        error={error}
        isLoading={isLoading}
        isFetching={isFetching}
      />
    </div>
  );
};

export default PikachuReduxSagaHook;
