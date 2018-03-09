import React from 'react';
import SignUpLogo from './../assest/img/SignUpLogo';
import PropTypes from 'prop-types';

function SignUpForm(props) {

  return (
    <div className="SignUpForm">
      <style jsx >{`
          .SignUpForm {
            width: 400px;
            height: 500px;
            background-color: var(--color5);
            border: 3px solid black;
          }
          .tabs {
            width: 100%;
            text-align: center;
          }
          .LogInTatSelected {
            background-color: var(--color2);
            border-radius: 50px 50px 0 0;
            width: 50%;
            display: inline-block;
            border: 3px solid black;
          }
          .SIGNUP {
            background-color: var(--color5);
            border: 3px solid black;
            border-bottom-color: var(--color5);
            border-radius: 50px 50px 0 0;
            width: 50%;
            display: inline-block;
          }
          .TabeText {
            padding: 7px 10px;
          }
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
      <div className="tabs">
        <div onClick={props.loginUserTestChange} className='LogInTatSelected'>
          <h3 className="TabeText">Log In</h3>
        </div>
        <div className='SIGNUP'>
          <h3 className="TabeText">Sign Up</h3>
        </div>
      </div>
      <div className="Logo">
        <SignUpLogo />
      </div>
      <form>
        <input
          className="Input"
          name='username'
          type="text"
          placeholder="Username"
        />
        <input
          className="Input"
          name='email'
          type="text"
          placeholder="Email Address"
        />
        <input
          className="Input"
          name='passwordOne'
          type="password"
          placeholder="Password"
        />
        <input
          className="Input"
          name='passwordTwo'
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit" className="SignUpButton">
            Sign Up
        </button>
      </form>
    </div>
  );
}
SignUpForm.propTypes = {
  loginUserTestChange: PropTypes.func
};

export default SignUpForm;
