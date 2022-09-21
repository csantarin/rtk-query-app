import { createSelector } from '@reduxjs/toolkit';
import pikachuApi from './pikachuApi';

export const selectPikachuReduxSaga = pikachuApi.endpoints.getPikachu.select('reduxSaga');
export const selectPikachuReduxSagaData = createSelector(
  selectPikachuReduxSaga,
  (rtkQueryResult) => {
    return rtkQueryResult.data;
  },
);
export const selectPikachuReduxSagaError = createSelector(
  selectPikachuReduxSaga,
  (rtkQueryResult) => {
    return rtkQueryResult.error;
  },
);
export const selectPikachuReduxSagaIsLoading = createSelector(
  selectPikachuReduxSaga,
  (rtkQueryResult) => {
    return rtkQueryResult.isLoading;
  },
);
