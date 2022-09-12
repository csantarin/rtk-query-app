import { counterRuntime } from 'counter/sm/counterSagas';
import { all, call, CallEffect } from 'redux-saga/effects';

const runtimes: CallEffect<unknown>[] = [
  call(counterRuntime),
];

export function* rootRuntime() {
	yield all(runtimes);
}
