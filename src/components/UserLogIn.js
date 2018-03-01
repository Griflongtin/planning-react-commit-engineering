import React, { Component } from 'react';
import LogInLogo from './../assest/img/LogInLogo';

class UserLogIn extends Component {
  render() {
    return (
      <div className="LoginContainer">
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
        <form>
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
          <button className="LoginButton">Log In</button>
        </form>
      </div>
    );
  }
}

export default UserLogIn;
