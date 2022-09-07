import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

export const counterSliceName = 'counter';

export const counterInitialState: CounterState = {
  value: 0
};

const counterSlice = createSlice({
  name: counterSliceName,
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    incrementAsync() {
      // trigger action. do nothing.
    },
    decrement(state) {
      state.value--;
    },
    decrementAsync() {
      // trigger action. do nothing.
    },
  },
});

export const {
  actions: counterActions,
  reducer: counterReducer,
} = counterSlice;
