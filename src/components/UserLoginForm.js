import React from 'react';
import LogInLogo from './../assest/img/LogInLogo';
import PropTypes from 'prop-types';

function SignInForm(props) {
  return (
    <div>
      <style jsx >{`
          .LoginContainer {
            width: 100%;
            height: 100%;
          }
          .Logo {
            padding-top: 20px;
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
          .LoginButton {
            display: block;
            width: 75%;
            margin: 0 auto;
            width: 75%;
            height: 40px;
            border-radius: 30px;
          }
      `}</style>
      <div className="Logo">
        <LogInLogo />
      </div>
      <form onSubmit={props.handleOnSubmitLogin}>
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
        <button disabled={props.isInvalid} type="submit" className="LoginButton">
          Sign In
        </button>

        { props.passState.error && <p>{props.passState.error.message}</p> }

      </form>
    </div>
  );
}
SignInForm.propTypes = {
  handleOnSubmitLogin: PropTypes.func,
  handleWitchUserLoginTab: PropTypes.func,
  handleOnFieldChange: PropTypes.func,
  passState: PropTypes.object,
  isInvalid: PropTypes.bool
};

export default SignInForm;
