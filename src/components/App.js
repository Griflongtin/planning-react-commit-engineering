import React from 'react';
import Nav from './Nav';
import UserLoginForm from './UserLoginForm';
import * as routes from '../constants/routes';
import Landing from './Landing';
import ProjectList from './ProjectList';
import SelectedProject from './SelectedProject';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { auth } from '../firebase';


// import { auth } from '../firebase';
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      authUser: null,
      signUpSelected: false
    };
    this.tabClick = this.tabClick.bind(this);
  }
  tabClick(){
    this.setState({signUpSelected: !this.state.signUpSelected});
  }

  userloginEventFunction(event){
    auth.doSignInWithEmailAndPassword(event.email, event.password)
      .catch(error => {
        this.setState(byPropKey('error', error));
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
      `}</style>
        <Router>
          <Nav />
          <div>
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
              exact path={routes}
              component={() => <UserLoginForm/>}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
