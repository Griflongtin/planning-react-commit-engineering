import React from 'react';
import SignUpLogo from './../assest/img/SignUpLogo';
import PropTypes from 'prop-types';

function SignUpFrom(props) {

  return (
    <div>
      <style jsx >{`
          .SignUpContainer {
            width: 100%;
            height: 100%;
          }
          .Input {
            display: block;
            border-radius: 30px;
            margin: 15px auto;
            padding: 0 0 0 10px;
            font-size: 20px;
            width: 75%;
            height: 40px;
          }
          .SignUpButton {
            display: block;
            width: 75%;
            margin: 0 auto;
            width: 75%;
            height: 40px;
            border-radius: 30px;
            color: black;
          }
      `}</style>
      <div className="Logo">
        <SignUpLogo />
      </div>
      <form onSubmit={props.handleOnSubmitSignUp}>
        <input
          className="Input"
          value={props.passState.username}
          name='username'
          onChange={props.handleOnFieldChange}
          type="text"
          placeholder="Username"
        />
        <input
          className="Input"
          value={props.passState.email}
          name='email'
          onChange={props.handleOnFieldChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          className="Input"
          value={props.passState.password}
          name='password'
          onChange={props.handleOnFieldChange}
          type="password"
          placeholder="Password"
        />
        <input
          className="Input"
          value={props.passState.passwordTwo}
          name='passwordTwo'
          onChange={props.handleOnFieldChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={props.isInvalid} type="submit" className="SignUpButton">
          Sign Up
        </button>

        { props.passState.error && <p>{props.passState.error.message}</p> }

      </form>
    </div>
  );
}

SignUpFrom.propTypes = {
  handleOnSubmitSignUp: PropTypes.func,
  handleWitchUserLoginTab: PropTypes.func,
  handleOnFieldChange: PropTypes.func,
  passState: PropTypes.object,
  isInvalid: PropTypes.bool
};


export default SignUpFrom;
