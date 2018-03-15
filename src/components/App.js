import React, { Component } from 'react';
import Nav from './Nav';
import * as routes from '../constants/routes';
import Landing from './Landing';
import ProjectList from './ProjectList';
import SelectedProject from './SelectedProject';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserLogFromReturn from './UserLogForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUserTest: true,
      loginProjectModal: true,
      selectedProjectId: null
    };
    this.handleloginUserTestChange = this.handleloginUserTestChange.bind(this);
    this.selectedProjectHandle = this.selectedProjectHandle.bind(this);
  }

  handleloginUserTestChange() {
    this.setState({loginUserTest: !this.state.loginUserTest});
  }
  selectedProjectHandle(projectId) {
    this.setState({selectedProjectId: projectId});
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
            --color4: rgb(30, 210, 178);
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
            <Nav />
            <div className="viewBox">
              <Route
                exact path={routes.LANDING}
                component={() => <Landing />}
              />
              <Route
                exact path={routes.PROJECT_LIST}
                component={() => <ProjectList selectedProjectId={this.state.selectedProjectId} selectedProjectHandle={this.selectedProjectHandle} loginProjectModalDisplay={this.state.loginProjectModal}/>}
              />
              <Route
                exact path={routes.SELECTED_PROJECT}
                component={() => <SelectedProject />}
              />
              <Route
                exact path={routes.USER_LOG_FORMS}
                component={() => <UserLogFromReturn />}
              />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
