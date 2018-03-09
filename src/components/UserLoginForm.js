import React from 'react';
import LogInLogo from './../assest/img/LogInLogo';
import PropTypes from 'prop-types';

function SignInForm(props) {

  return (
    <div className="SignInContainer">
      <style jsx >{`
          .SignInContainer {
            width: 400px;
            height: 500px;
            background-color: var(--color5);
            border: 3px solid black;
          }
          .tabs {
            width: 100%;
            text-align: center;
          }
          .LOGIN {
            background-color: var(--color2);
            border-radius: 50px 50px 0 0;
            width: 50%;
            display: inline-block;
            border: 3px solid black;
          }
          .SIGNUP {
            background-color: var(--color2);
            border-radius: 50px 50px 0 0;
            width: 50%;
            display: inline-block;
            border: 3px solid black;
          }
          .LogInTatSelected {
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
      <div className="tabs">
        <div className='LOGIN LogInTatSelected'>
          <h3 className="TabeText">Log In</h3>
        </div>
        <div onClick={props.loginUserTestChange} className='SIGNUP'>
          <h3 className="TabeText">Sign Up</h3>
        </div>
      </div>
      <div className="Logo">
        <LogInLogo />
      </div>
      <form>
        <input
          className="Input"
          name='email'
          type="text"
          placeholder="Email Address"
        />
        <input
          className="Input"
          name='password'
          type='password'
          placeholder="Password"
        />
        <button type="submit" className="LoginButton">
            Login
        </button>
      </form>
    </div>
  );
}
SignInForm.propTypes = {
  loginUserTestChange: PropTypes.func
};

export default SignInForm;
