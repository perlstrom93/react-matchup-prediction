import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import H3 from 'components/H3';
import Error from 'components/Error';

import Form from './Form';
import Input from './Input';
import Button from './Button';

import { changeUsername, signinUser } from './actions';
import { makeSelectUsername, makeSelectSigninError } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'signin';

export function Signin({ username, error, onSubmitForm, onChangeUsername }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <article>
      <H3>Sign In</H3>
      {error ? <Error>I am so sorry, something went wrong, I am a bad dev.</Error> : null}
      <Form onSubmit={onSubmitForm}>
        <label htmlFor="signinUser">
          Sign in as an existing user:
          <Input
            id="signinUser"
            type="text"
            placeholder="perlstrom93"
            value={username}
            onChange={onChangeUsername}
          />
          <Button type="submit">Sign me in as {username || '... '}!</Button>
        </label>
      </Form>
    </article>
  );
}

Signin.PropTypes = {
  username: PropTypes.string,
  error: PropTypes.object,
  onSubmitForm: PropTypes.func,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  error: makeSelectSigninError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(signinUser());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Signin);
