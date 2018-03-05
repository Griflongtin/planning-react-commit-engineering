import React, { Component } from 'react';
import Nav from './Nav';
import SignUpPage from './UserSignUpForm';
import SignInPage from './UserLoginForm';
import * as routes from '../constants/routes';
import Landing from './Landing';
import ProjectList from './ProjectList';
import SelectedProject from './SelectedProject';
import { firebase } from '../firebase';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
      console.log(authUser);
    });
  }

  render() {
    return (
      <div>
        <style jsx global>{`
          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }
          :root {
            --color1: rgba(1, 32, 63, 1);
            --color2: rgba(55, 136, 204, 1);
            --color3: rgba(0, 96, 193, 1);
            --color4: rgba(23, 40, 68, 1);
            --color5: rgba(4, 75, 142, 1);
          }
          .UserForm {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .viewBox {
            display: flex;
            justify-content: center;
          }
      `}</style>
        <Router>
          <div>
            <Nav authUser={this.state.authUser} />
            <div className="viewBox">
              <Route
                exact path={routes.LANDING}
                component={() => <Landing />}
              />
              <Route
                exact path={routes.PROJECT_LIST}
                component={() => <ProjectList />}
              />
              <Route
                exact path={routes.SELECTED_PROJECT}
                component={() => <SelectedProject />}
              />
              <Route
                exact path={routes.USER_SIGN_UP_FORM}
                component={() => <SignUpPage/>}
              />
              <Route
                exact path={routes.USER_LOG_IN_FORM}
                component={() => <SignInPage/>}
              />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
