import React, { Component } from 'react';
import LogInLogo from './../assest/img/LogInLogo';
import { withRouter } from 'react-router-dom';
import { auth } from '../firebase';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class UserLogIn extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit(event) {
    const {
      email,
      password,
    } = this.state;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

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
        <form OnSubmit={this.onSubmit}>
          <input
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            className="Input"
            type='email'
            placeholder="Email Address"
          />
          <input
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            className="Input"
            type='Password'
            placeholder='Password'
          />
          <button disabled={isInvalid} type='submit' className="LoginButton">Log In</button>
          { error && <p>{error.message}</p> }
        </form>
      </div>
    );
  }
}

export default withRouter(UserLogIn);
