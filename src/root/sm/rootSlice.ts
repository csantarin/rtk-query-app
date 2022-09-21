import { combineReducers } from "redux";

import pokemonApi from "pokemon/sm/pokemonApi";
import pikachuSlice from "pikachu/sm/pikachuSlice";

const reducers = {
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  [pikachuSlice.name]: pikachuSlice.reducer,
};

export const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;
