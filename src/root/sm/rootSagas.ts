import { all, CallEffect } from 'redux-saga/effects';

const runtimes: CallEffect<unknown>[] = [
];

export function* rootRuntime() {
	yield all(runtimes);
}
