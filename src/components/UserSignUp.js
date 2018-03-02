import React, { Component } from 'react';
import SignUpLogo from './../assest/img/SignUpLogo';

class UserSignUp extends Component {
  render() {
    return (
      <div className="SignUpContainer">
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
          }

      `}</style>
        <SignUpLogo />
        <form>
          <input
            className="Input"
            type='text'
            placeholder="Your Full Name"
          />
          <input
            className="Input"
            type='te'
            placeholder="User Name"
          />
          <input
            className="Input"
            type='email'
            placeholder="Email Address"
          />
          <input
            className="Input"
            type='Password'
            placeholder='Password'
          />
          <input
            className="Input"
            type='Password'
            placeholder='Retype Password'
          />
          <button className="SignUpButton">Log In</button>
        </form>
      </div>
    );
  }
}

export default UserSignUp;
