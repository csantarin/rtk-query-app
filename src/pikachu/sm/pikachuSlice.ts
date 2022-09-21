import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

export interface PikachuState {
  pikachu: {
    data: pokemon.Pokemon | null;
    error: FetchBaseQueryError | SerializedError | null;
  };
}

export const pikachuSliceName = 'pikachu';

export const pikachuInitialState: PikachuState = {
  pikachu: {
    data: null,
    error: null,
  },
};

const pikachuSlice = createSlice({
  name: pikachuSliceName,
  initialState: pikachuInitialState,
  reducers: {
    startGetPikachu() {
      // trigger action. do nothing.
    },
    getPikachuDone(state, action: PayloadAction<pokemon.Pokemon | undefined>) {
      state.pikachu.data = action.payload ?? null;
    },
    getPikachuError(state, action: PayloadAction<FetchBaseQueryError | SerializedError | undefined>) {
      state.pikachu.error = action.payload ?? null;
    }
  },
});

export const {
  actions: pikachuActions,
  reducer: pikachuReducer,
} = pikachuSlice;

export default pikachuSlice;
