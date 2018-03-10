import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

import { auth } from '../firebase';
import * as routes from '../constants/routes';
import SignUpLogo from './../assest/img/SignUpLogo';

const SignUpPage = ({ history }) =>
  <div>
    <SignUpForm history={history} />
  </div>

  const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        authUser.updateProfile({displayName: username})
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.LANDING);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
    event.preventDefault();
  }

  onFieldChange = (event) => {
    const newValue = event.target.value
    const name = event.target.name
    this.setState(byPropKey(name, newValue))
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

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
        <Link to={routes.USER_LOG_IN_FORM}>
          <div className='LogInTatSelected'>
            <h3 className="TabeText">Log In</h3>
          </div>
        </Link>
        <div className='SIGNUP'>
          <h3 className="TabeText">Sign Up</h3>
        </div>
      </div>
      <div className="Logo">
        <SignUpLogo />
      </div>
      <form onSubmit={this.onSubmit}>
        <input
          className="Input"
          value={username}
          name='username'
          onChange={this.onFieldChange}
          type="text"
          placeholder="Username"
        />
        <input
          className="Input"
          value={email}
          name='email'
          onChange={this.onFieldChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          className="Input"
          value={passwordOne}
          name='passwordOne'
          onChange={this.onFieldChange}
          type="password"
          placeholder="Password"
        />
        <input
          className="Input"
          value={passwordTwo}
          name='passwordTwo'
          onChange={this.onFieldChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit" className="SignUpButton">
          Sign Up
        </button>

        { error && <p>{error.message}</p> }

      </form>
    </div>
    );
  }
}

export default withRouter(SignUpPage);

export {
  SignUpForm,
};
