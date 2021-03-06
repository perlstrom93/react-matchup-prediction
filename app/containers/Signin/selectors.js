import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSignin = state => state.signin || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectSignin,
    signinState => signinState.username,
  );

const makeSelectSigninSuccess = () =>
  createSelector(
    selectSignin,
    signinState => signinState.success,
  );

const makeSelectSigninError = () =>
  createSelector(
    selectSignin,
    signinState => signinState.error,
  );

export { selectSignin, makeSelectUsername, makeSelectSigninSuccess, makeSelectSigninError };
