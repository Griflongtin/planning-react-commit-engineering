import React, { Component } from 'react';
import LogInLogo from './../assest/img/LogInLogo';
import { withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) =>{
  <div>
    <UserLogIn history={history} />
  </div>;};

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

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.LANDING);
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
          <div className='LOGIN' >
            <h3 className="TabeText">Log In</h3>
          </div>
          <div className='SignUpTabSelected'>
            <h3 className="TabeText">Sign Up</h3>
          </div>
        </div>
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

export {
  SignInPage,
};
