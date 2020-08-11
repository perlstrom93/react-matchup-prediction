/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectUsername } from './selectors';
import { signinSuccess, signinError } from './actions';
import { SIGNIN_USERNAME } from './constants';

export function* signinUser() {
  const username = yield select(makeSelectUsername());
  const requestURL = `/api/signin`;
  try {
    const { message } = yield call(request, requestURL, { method: 'POST', body: JSON.stringify({ username }) });
    yield put(signinSuccess(message));
  } catch ({ message }) {
    yield put(signinError(message));
  }
}

export default function* handleSigninUser() {
  yield takeLatest(SIGNIN_USERNAME, signinUser);
}
