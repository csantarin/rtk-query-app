import { createSelector } from "@reduxjs/toolkit";

const selectCounter = (state: root.State) => {
  return state.counter;
};

export const selectCouterValue = createSelector(
  selectCounter,
  (state) => state.value
);
