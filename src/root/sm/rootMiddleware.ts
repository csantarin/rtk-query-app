import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import createSagaMiddleware from "redux-saga";

import pokemonApi from "pokemon/sm/pokemonApi";
import { RootState } from "./rootSlice";

export const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  pokemonApi.middleware,
  sagaMiddleware,
];

const rootMiddleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware<RootState>) => {
  const defaultMiddleware = getDefaultMiddleware({
    serializableCheck: false,
  });

  return defaultMiddleware.concat(middlewares);
};

export default rootMiddleware;
