import { pikachuRuntime } from 'pikachu/sm/pikachuSagas';
import { all, call, CallEffect } from 'redux-saga/effects';

const runtimes: CallEffect<unknown>[] = [
  call(pikachuRuntime),
];

export function* rootRuntime() {
	yield all(runtimes);
}
