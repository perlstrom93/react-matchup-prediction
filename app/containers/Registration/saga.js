/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectUsername } from './selectors';
import { registraionError } from './actions';
import { CREATE_USERNAME } from './constants';

export function* createUser() {
  const username = yield select(makeSelectUsername());
  const requestURL = `api/register`;
  console.log('create user,', username.trim());
  try {
    const repos = yield call(request, requestURL, { method: 'POST', body: JSON.stringify({ username }) });
    // yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(registraionError(err));
  }
}

export default function* handleCreateUser() {
  yield takeLatest(CREATE_USERNAME, createUser);
}
