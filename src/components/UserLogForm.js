import React from 'react';
import SignUpPage from './UserSignUpForm';
import SignInPage from './UserLoginForm';
import PropTypes from 'prop-types';

function UserLogFrom(props) {
  return (
    <div>
      <style jsx >{`
      `}</style>
      {props.loginUserTest ? <SignInPage loginUserTestChange={props.loginUserTestChange}/> :<SignUpPage loginUserTestChange={props.loginUserTestChange}/>}
    </div>
  );
}
UserLogFrom.propTypes = {
  loginUserTest: PropTypes.bool,
  loginUserTestChange: PropTypes.func
};

export default UserLogFrom;
