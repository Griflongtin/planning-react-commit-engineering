import React from 'react';
import UserLogIn from  './UserLogIn.js';
import UserSignUp from  './UserSignUp.js';
import PropTypes from 'prop-types';

function UserForm(props) {
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
            .SignUpTabSelected {
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
          `}</style>
      <div className="tabs">
        <div className={(props.signUpSelectedPass) ? 'LOGIN' : 'SignUpTabSelected'} onClick={(props.signUpSelectedPass) ? props.tabClicked : ''} >
          <h3 className="TabeText">Log In</h3>
        </div>
        <div className={ (props.signUpSelectedPass) ? 'SignUpTabSelected' : 'SIGNUP' } onClick={(props.signUpSelectedPass) ? '' : props.tabClicked} >
          <h3 className="TabeText">Sign Up</h3>
        </div>
      </div>
      { (props.signUpSelectedPass) ? <UserSignUp /> : <UserLogIn userloginEventFunction={props.userloginEventFunction}/> }
    </div>
  );
}
UserForm.propTypes = {
  signUpSelectedPass: PropTypes.bool,
  tabClicked: PropTypes.func,
  userloginEventFunction: PropTypes.func
};


export default UserForm;
