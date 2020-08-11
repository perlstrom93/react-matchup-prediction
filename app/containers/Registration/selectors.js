import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRegistration = state => state.registration || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectRegistration,
    registrationState => registrationState.username,
  );

const makeSelectRegistrationError = () =>
  createSelector(
    selectRegistration,
    registraionState => registraionState.error,
  );

export { selectRegistration, makeSelectUsername, makeSelectRegistrationError };
