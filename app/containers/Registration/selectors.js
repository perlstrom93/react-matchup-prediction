import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRegistration = state => state.registration || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectRegistration,
    registrationState => registrationState.username,
  );

const makeSelectRegistrationSuccess = () =>
  createSelector(
    selectRegistration,
    registraionState => registraionState.success,
  );

const makeSelectRegistrationError = () =>
  createSelector(
    selectRegistration,
    registraionState => registraionState.error,
  );

export { selectRegistration, makeSelectUsername, makeSelectRegistrationSuccess, makeSelectRegistrationError };
