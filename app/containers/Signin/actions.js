import { CHANGE_USERNAME, SIGNIN_USERNAME, SIGNIN_SUCCESS, SIGNIN_ERROR } from './constants';

export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function signinUser() {
  return {
    type: SIGNIN_USERNAME,
  };
}

export function signinSuccess(message) {
  return {
    type : SIGNIN_SUCCESS,
    message,
  }
}

export function signinError(error) {
  return {
    type : SIGNIN_ERROR,
    error,
  }
}
