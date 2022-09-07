import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootSlice";
import rootMiddleware from "./rootMiddleware";

const store = configureStore({
  reducer: rootReducer,
  middleware: rootMiddleware,
});

export default store;
