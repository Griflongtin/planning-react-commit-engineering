import React, { Component } from 'react';
import { Link, withRouter,} from 'react-router-dom';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import LogInLogo from './../assest/img/LogInLogo';

const SignInPage = ({ history }) =>
  <div>
    <SignInForm history={history} />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
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

  onFieldChange = (event) => {
    const newValue = event.target.value
    const name = event.target.name
    this.setState(byPropKey(name, newValue))
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
        <Link to={routes.USER_SIGN_UP_FORM}>
          <div className='SIGNUP'>
            <h3 className="TabeText">Sign Up</h3>
          </div>
        </Link>
      </div>
      <div className="Logo">
        <LogInLogo />
      </div>
      <form onSubmit={this.onSubmit}>
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
          value={password}
          name='password'
          onChange={this.onFieldChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit" className="LoginButton">
          Sign Up
        </button>

        { error && <p>{error.message}</p> }

      </form>
    </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
