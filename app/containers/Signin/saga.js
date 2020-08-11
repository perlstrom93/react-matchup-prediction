/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectUsername } from './selectors';
import { signinError } from './actions';
import { SIGNIN_USERNAME } from './constants';

export function* signinUser() {
  const username = yield select(makeSelectUsername());
  const requestURL = `/api/sigin`;
  console.log('signin user,', username.trim());
  try {
    const repos = yield call(request, requestURL, { method: 'POST', body: JSON.stringify({ username }) });
    // yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(signinError(err));
  }
}

export default function* handleSigninUser() {
  yield takeLatest(SIGNIN_USERNAME, signinUser);
}
