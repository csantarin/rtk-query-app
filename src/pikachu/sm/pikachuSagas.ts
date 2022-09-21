import { all, call, put, takeLeading } from 'redux-saga/effects';
import { getPikachu } from './pikachuApi';
import { pikachuActions } from './pikachuSlice';

function* getPikachuTask() {
  try {
    const data: pokemon.Pokemon | undefined = yield call(getPikachu, 'reduxSaga');
    yield put(pikachuActions.getPikachuDone(data));
  } catch (error: any) {
    yield put(pikachuActions.getPikachuError(error));
  }
}

function* getPikachuRuntime() {
  yield takeLeading(pikachuActions.startGetPikachu.toString(), getPikachuTask);
}

export function* pikachuRuntime() {
  yield all([
    call(getPikachuRuntime),
  ]);
}
