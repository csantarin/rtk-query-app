import { counterRuntime } from 'counter/sm/counterSagas';
import { all, call } from 'redux-saga/effects';

const runtimes = [
  call(counterRuntime),
];

export function* rootRuntime() {
	yield all(runtimes);
}
