import React, { Component } from 'react';
// import UserLogIn from  './UserLogIn.js';
import UserSignUp from  './UserSignUp.js';
let SelectTab = false;
class UserForm extends Component {
  render() {
    return (
      <div className="UserBlock">
        <style jsx>{`
          .UserBlock {
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
            border-radius: 50px 50px 0 0;
            width: 50%;
            display: inline-block;
            border: 3px solid black;
          }
          .SIGNUP {
            border-radius: 50px 50px 0 0;
            width: 50%;
            display: inline-block;
            border: 3px solid black;
          }
          .SelectedTab {
            background-color: var(--color2);
            border: 3px solid black;
            border-bottom-color: var(--color2);
            border-radius: 50px 50px 0 0;
            width: 50%;
            display: inline-block;
          }
          .TabeText {
            padding: 7px 10px;
          }
        `}</style>
        <div className="tabs">
          <div className={(SelectTab) ? 'LOGIN' : 'SelectedTab' }>
            <h3 className="TabeText">Log In</h3>
          </div>
          <div className={ (SelectTab) ? 'SelectedTab' : 'none' }>
            <h3 className="TabeText">Sign Up</h3></div>
        </div>
        <UserSignUp />
      </div>
    );
  }
}
// <UserLogIn />

export default UserForm;