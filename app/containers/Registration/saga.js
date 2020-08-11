/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request, { parseJSON } from 'utils/request';
import { makeSelectUsername } from './selectors';
import { registraionSuccess, registraionError } from './actions';
import { CREATE_USERNAME } from './constants';

export function* createUser() {
  const username = yield select(makeSelectUsername());
  const requestURL = `api/register`;
  try {
    const { message } = yield call(request, requestURL, { method: 'POST', body: JSON.stringify({ username }) });
    yield put(registraionSuccess(message));
  } catch ({ message }) {
    yield put(registraionError(message));
  }
}

export default function* handleCreateUser() {
  yield takeLatest(CREATE_USERNAME, createUser);
}
