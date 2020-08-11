/*
 * Home Actions
 */

import { CHANGE_USERNAME, CREATE_USERNAME, REGISTRATION_SUCCESS, REGISTRATION_ERROR } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function createUser() {
  return {
    type: CREATE_USERNAME,
  };
}

export function registraionSuccess(message) {
  return {
    type : REGISTRATION_SUCCESS,
    message,
  }
}

export function registraionError(error) {
  return {
    type : REGISTRATION_ERROR,
    error,
  }
}
