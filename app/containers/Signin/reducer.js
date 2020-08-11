import produce from 'immer';
import { CHANGE_USERNAME, SIGNIN_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  username: '',
};

/* eslint-disable default-case, no-param-reassign */
const signinReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        draft.username = action.username;
        draft.error = null;
        break;
      case SIGNIN_ERROR:
        draft.error = action.error;
        break;
    }
  });

export default signinReducer;
