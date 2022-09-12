import { combineReducers } from "redux";

import pokemonApi from "pokemon/sm/pokemonApi";

const reducers = {
  [pokemonApi.reducerPath]: pokemonApi.reducer,
};

export const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;
