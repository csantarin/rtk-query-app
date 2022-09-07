import { combineReducers } from "redux";

import { counterReducer, counterSliceName } from "counter/sm/counterSlice";
import pokemonApi from "pokemon/sm/pokemonApi";

const reducers = {
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  [counterSliceName]: counterReducer,
};

export const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;
