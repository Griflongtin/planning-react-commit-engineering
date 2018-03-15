import React, { Component } from 'react';
import SignUpPage from './UserSignUpForm';
import SignInPage from './UserLoginForm';
import { Link, withRouter,} from 'react-router-dom';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const UserLogFromReturn = ({ history }) =>
  <div>
    <UserLogFrom history={history} />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  passwordTwo: '',
  error: null,
  witchUserLoginTab: true,
};

class UserLogFrom extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.handleOnFieldChange = this.handleOnFieldChange.bind(this);
    this.handleOnSubmitLogin = this.handleOnSubmitLogin.bind(this);
    this.handleOnSubmitSignUp = this.handleOnSubmitSignUp.bind(this);
  }

  handleOnFieldChange = (event) => {
    const newValue = event.target.value
    const name = event.target.name
    this.setState(byPropKey(name, newValue))
  }

  handleOnSubmitLogin = (event) => {
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

  handleOnSubmitSignUp = (event) => {
    const {
      username,
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.LANDING);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render(){
    const {
      username,
      email,
      password,
      passwordTwo,
      error,
    } = this.state;

    const isInvalidSignUp =
      password !== passwordTwo ||
      password === '' ||
      email === '' ||
      username === '';

    const isInvalidLogin =
      email === '' ||
      password === '';


    return (
      <div className="LogContainer">
        <style jsx >{`
          .LogContainer {
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
          .TabSelected {
            background-color: var(--color5);
            border: 3px solid black;
            border-bottom-color: var(--color5);
            border-radius: 50px 50px 0 0;
            width: 50%;
          }
          .TabText {
            padding: 7px 10px;
          }
      `}</style>
    {this.state.witchUserLoginTab ?
      <div className="tabs">
        <div className='LOGIN TabSelected'>
          <h3 className="TabText">Log In</h3>
        </div>
        <div className='SIGNUP' onClick={() => {this.setState({witchUserLoginTab: !this.state.witchUserLoginTab})}}>
          <h3 className="TabText">Sign Up</h3>
        </div>
      </div>

      :<div className="tabs">
        <div className='LOGIN' onClick={() => {this.setState({witchUserLoginTab: !this.state.witchUserLoginTab})}}>
          <h3 className="TabText">Log In</h3>
        </div>
        <div className='SIGNUP TabSelected'>
          <h3 className="TabText">Sign Up</h3>
        </div>
      </div>}
    {this.state.witchUserLoginTab ?
    <SignInPage
      handleOnFieldChange={this.handleOnFieldChange}
      handleOnSubmitLogin={this.handleOnSubmitLogin}
      passState={this.state}
      isInvalid={isInvalidLogin}/>
    :<SignUpPage
      handleOnFieldChange={this.handleOnFieldChange}
      passState={this.state}
      isInvalid={isInvalidSignUp}
      handleOnSubmitSignUp={this.handleOnSubmitSignUp}/>}
      </div>
    );
  }
}

export default withRouter(UserLogFromReturn);

export {
  UserLogFrom,
};
