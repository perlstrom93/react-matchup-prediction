import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import H3 from 'components/H3';
import Confirm from 'components/Confirm';
import Error from 'components/Error';

import Form from './Form';
import Input from './Input';
import Button from './Button';

import { changeUsername, createUser } from './actions';
import { makeSelectUsername, makeSelectRegistrationSuccess, makeSelectRegistrationError } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'registration';

export function Registration({ username, success, error, onSubmitForm, onChangeUsername }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <article>
      <H3>Register</H3>
      {success ? <Confirm>{success}</Confirm> : null }
      {error ? <Error>{error}</Error> : null }
      <Form onSubmit={onSubmitForm}>
        <label htmlFor="createUser">
          Create a new user:
          <Input
            id="createUser"
            type="text"
            placeholder="perlstrom93"
            value={username}
            onChange={onChangeUsername}
          />
          <Button type="submit">I want to be {username || '... '}!</Button>
        </label>
      </Form>
    </article>
  );
}

Registration.PropTypes = {
  username: PropTypes.string,
  error: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  success: makeSelectRegistrationSuccess(),
  error: makeSelectRegistrationError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(createUser());
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
)(Registration);
