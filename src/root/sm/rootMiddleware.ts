import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import createSagaMiddleware from "redux-saga";

import apiSlice from "api/sm/apiSlice";
import { RootState } from "./rootSlice";

export const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  apiSlice.middleware,
  sagaMiddleware,
];

const rootMiddleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware<RootState>) => {
  const defaultMiddleware = getDefaultMiddleware({
    serializableCheck: false,
  });

  return defaultMiddleware.concat(middlewares);
};

export default rootMiddleware;
