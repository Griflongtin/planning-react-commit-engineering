import React, { Component } from 'react';
import SignUpPage from './UserSignUpForm';
import SignInPage from './UserLoginForm';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  passwordTwo: '',
  error: null,
};

class UserLogFrom extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  render(){
    return (
      <div>
        <style jsx >{`
      `}</style>
        {null ? <SignInPage/> :<SignUpPage/>}
      </div>
    );
  }
}

export default UserLogFrom;
