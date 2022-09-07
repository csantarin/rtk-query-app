import { combineReducers } from "redux";

import apiSlice from "api/sm/apiSlice";
import { counterReducer, counterSliceName } from "counter/sm/counterSlice";

const reducers = {
  [apiSlice.reducerPath]: apiSlice.reducer,
  [counterSliceName]: counterReducer,
};

export const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;
