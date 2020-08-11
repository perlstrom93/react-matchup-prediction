import produce from 'immer';
import { CHANGE_USERNAME, REGISTRATION_SUCCESS, REGISTRATION_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  success: null,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const registrationReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        draft.username = action.username;
        draft.success = null;
        draft.error = null;
        break;
      case REGISTRATION_SUCCESS:
        draft.success = action.message;
      case REGISTRATION_ERROR:
        draft.error = action.error;
        break;
    }
  });

export default registrationReducer;
