
import { delay, put, takeLeading } from "redux-saga/effects";

import { counterActions } from "./counterSlice";

function* incrementAsync() {
  yield delay(1000);
  yield put(counterActions.increment());
}

function* decrementAsync() {
  yield delay(1000);
  yield put(counterActions.decrement());
}

export function* counterRuntime(): Generator<any, void, unknown> {
  yield takeLeading(counterActions.incrementAsync, incrementAsync);
  yield takeLeading(counterActions.decrementAsync, decrementAsync);
}
