import React from 'react';
import { Link, withRouter,} from 'react-router-dom';
import * as routes from '../constants/routes';
import PropTypes from 'prop-types';
import ProjectPaswordModal from './ProjectPaswordModal';


const projectListPass = {
  askdjflaksdjf: {
    commits: ['lakjdflkasdasdadf', 'adfasddfjadfiaj','adfasdfjassdfjddfasdfjksadf'],
    password: '',
    projectDescription: 'this is a desciption for project 1',
    projectMaker: 'kjlaskjdfkjakk999w4rj349u',
    projectName: 'coolest project number 1',
    projectNumber: 1,
    users: ['ksjffkasjdflaskdfj', 'askdhfkasdfjaskdjfkjkjkdfj', 'jahsdfjhaksdfjhaksdjfh'],
    projectGroupName: 'cool group'
  },
  twertwertwery: {
    commits: ['lakjdflkasdasdadf', 'adfasddfjadfiaj','adfasdfjassdfjddfasdfjksadf'],
    password: '',
    projectDescription: 'this is a desciption for project 2',
    projectMaker: 'kjlaskjdfkjakk999w4rj349u',
    projectName: 'coolest project number 2',
    projectNumber: 1,
    users: ['ksjffkasjdflaskdfj', 'askdhfkasdfjaskdjfkjkjkdfj', 'jahsdfjhaksdfjhaksdjfh'],
    projectGroupName: 'cool group'
  },
  lkhfsfghstif: {
    commits: ['lakjdflkasdasdadf', 'adfasddfjadfiaj','adfasdfjassdfjddfasdfjksadf'],
    password: '',
    projectDescription: 'this is a desciption for project 3',
    projectMaker: 'kjlaskjdfkjakk999w4rj349u',
    projectName: 'coolest project number 3',
    projectNumber: 1,
    users: ['ksjffkasjdflaskdfj', 'askdhfkasdfjaskdjfkjkjkdfj', 'jahsdfjhaksdfjhaksdjfh'],
    projectGroupName: 'cool group'
  },
  askdjflaksdjf5adsfasd: {
    commits: ['lakjdflkasdasdadf', 'adfasddfjadfiaj','adfasdfjassdfjddfasdfjksadf'],
    password: '',
    projectDescription: 'this is a desciption for project 1',
    projectMaker: 'kjlaskjdfkjakk999w4rj349u',
    projectName: 'coolest project number 1',
    projectNumber: 1,
    users: ['ksjffkasjdflaskdfj', 'askdhfkasdfjaskdjfkjkjkdfj', 'jahsdfjhaksdfjhaksdjfh'],
    projectGroupName: 'cool group'
  },
  twertwertwery5ghrtydtbhhh: {
    commits: ['lakjdflkasdasdadf', 'adfasddfjadfiaj','adfasdfjassdfjddfasdfjksadf'],
    password: '',
    projectDescription: 'this is a desciption for project 2',
    projectMaker: 'kjlaskjdfkjakk999w4rj349u',
    projectName: 'coolest project number 2',
    projectNumber: 1,
    users: ['ksjffkasjdflaskdfj', 'askdhfkasdfjaskdjfkjkjkdfj', 'jahsdfjhaksdfjhaksdjfh'],
    projectGroupName: 'cool group'
  },
  lkhfsfghstif5twertwertewr: {
    commits: ['lakjdflkasdasdadf', 'adfasddfjadfiaj','adfasdfjassdfjddfasdfjksadf'],
    password: '',
    projectDescription: 'this is a desciption for project 3',
    projectMaker: 'kjlaskjdfkjakk999w4rj349u',
    projectName: 'coolest project number 3',
    projectNumber: 1,
    users: ['ksjffkasjdflaskdfj', 'askdhfkasdfjaskdjfkjkjkdfj', 'jahsdfjhaksdfjhaksdjfh'],
    projectGroupName: 'cool group'
  },
  askdjflaksdjf5wertwerthfgh: {
    commits: ['lakjdflkasdasdadf', 'adfasddfjadfiaj','adfasdfjassdfjddfasdfjksadf'],
    password: '',
    projectDescription: 'this is a desciption for project 1',
    projectMaker: 'kjlaskjdfkjakk999w4rj349u',
    projectName: 'coolest project number 1',
    projectNumber: 1,
    users: ['ksjffkasjdflaskdfj', 'askdhfkasdfjaskdjfkjkjkdfj', 'jahsdfjhaksdfjhaksdjfh'],
    projectGroupName: 'cool group'
  },
  twertwertwery5lghjfh: {
    commits: ['lakjdflkasdasdadf', 'adfasddfjadfiaj','adfasdfjassdfjddfasdfjksadf'],
    password: '',
    projectDescription: 'this is a desciption for project 2',
    projectMaker: 'kjlaskjdfkjakk999w4rj349u',
    projectName: 'coolest project number 2',
    projectNumber: 1,
    users: ['ksjffkasjdflaskdfj', 'askdhfkasdfjaskdjfkjkjkdfj', 'jahsdfjhaksdfjhaksdjfh'],
    projectGroupName: 'cool group'
  },
  lkhfsfghstif5fdghdfjtyj: {
    commits: ['lakjdflkasdasdadf', 'adfasddfjadfiaj','adfasdfjassdfjddfasdfjksadf'],
    password: '',
    projectDescription: 'this is a desciption for project 3',
    projectMaker: 'kjlaskjdfkjakk999w4rj349u',
    projectName: 'coolest project number 3',
    projectNumber: 1,
    users: ['ksjffkasjdflaskdfj', 'askdhfkasdfjaskdjfkjkjkdfj', 'jahsdfjhaksdfjhaksdjfh'],
    projectGroupName: 'cool group'
  },
  askdjflaksdjf5ykjdyghdfg: {
    commits: ['lakjdflkasdasdadf', 'adfasddfjadfiaj','adfasdfjassdfjddfasdfjksadf'],
    password: '',
    projectDescription: 'this is a desciption for project 1',
    projectMaker: 'kjlaskjdfkjakk999w4rj349u',
    projectName: 'coolest project number 1',
    projectNumber: 1,
    users: ['ksjffkasjdflaskdfj', 'askdhfkasdfjaskdjfkjkjkdfj', 'jahsdfjhaksdfjhaksdjfh'],
    projectGroupName: 'cool group'
  },
  twertwertwery5argsfjfhkghljk: {
    commits: ['lakjdflkasdasdadf', 'adfasddfjadfiaj','adfasdfjassdfjddfasdfjksadf'],
    password: '',
    projectDescription: 'this is a desciption for project 2',
    projectMaker: 'kjlaskjdfkjakk999w4rj349u',
    projectName: 'coolest project number 2',
    projectNumber: 1,
    users: ['ksjffkasjdflaskdfj', 'askdhfkasdfjaskdjfkjkjkdfj', 'jahsdfjhaksdfjhaksdjfh'],
    projectGroupName: 'cool group'
  },
  lkhfsfghstiffsfgdskfgsdfkjgh5: {
    commits: ['lakjdflkasdasdadf', 'adfasddfjadfiaj','adfasdfjassdfjddfasdfjksadf'],
    password: '',
    projectDescription: 'this is a desciption for project 3',
    projectMaker: 'kjlaskjdfkjakk999w4rj349u',
    projectName: 'coolest project number 3',
    projectNumber: 1,
    users: ['ksjffkasjdflaskdfj', 'askdhfkasdfjaskdjfkjkjkdfj', 'jahsdfjhaksdfjhaksdjfh'],
    projectGroupName: 'cool group'
  },
};

function ProjectList(props) {
  const selectedProjectHTML = <div>
    <h1 className="header">Selected Project</h1>
    <div>
      <p>Project Name: {props.selectedProjectId ? projectListPass[props.selectedProjectId].projectName : null }</p>
      <p>Project Group Name: {props.selectedProjectId ? projectListPass[props.selectedProjectId].projectGroupName : null }</p>
      <p>Project Description: {props.selectedProjectId ? projectListPass[props.selectedProjectId].projectDescription : null }</p>
      <button>Join Project</button>
      {props.loginProjectModalDisplay ? <div className="showModal"><ProjectPaswordModal /></div> : null }
    </div>
  </div>;

  return (
    <div className="ProjectListContainer">
      <style jsx>{`
          .showModal {
            position: absolute;
            width: 100%;
            height: 100vh;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .ProjectListContainer {
            position: relative;
            padding: 10px 0 0 0;
            width: 85%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .ProjectListMasterDiv {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 25px 0;
            max-height: 396px;
            width: 85%;
            border: 1px solid white;
            background-color: var(--color5);
          }
          .ProjectListDiv {
            font-size: 32px;
            width: 100%;
            display: block;
            height: 43px;
            border: 1px solid white;
            margin: 0 auto;
          }
          .ProjectListDiv:hover, .ProjectListDiv:hover::placeholder {
            color: var(--color4);
            background-color: var(--color3);
          }
          .ProjectListDivContent {
            text-align: center;
          }
          .projectListChildDiv {
            background-color: var(--color2);
            border: 1px solid white;
            width: 85%;
            overflow-y: scroll;
          }
          .Search {
            color: red;
            text-align: center;
            width: 85%;
          }
          .header {
            color: var(--color4);
            padding: 0 0 15px 0;
          }
          ::-webkit-scrollbar {
            display: none;
          }
      `}</style>
      <div className="ProjectListMasterDiv">
        <h1 className="header">Your Project List</h1>
        <div className="projectListChildDiv">
          <input
            className="ProjectListDiv Search"
            type="text"
            placeholder="SEARCH FOR PROJECT"/>
          {Object.keys(projectListPass).map((projectId) => {
            const project = projectListPass[projectId];
            return<div onClick={() => {props.selectedProjectHandle(projectId);}} className="ProjectListDiv">
              <p className="ProjectListDivContent">{project.projectName}</p>
            </div>;
          })}
        </div>
      </div>
      {props.selectedProjectId ? selectedProjectHTML : null }
    </div>
  );
}
ProjectList.propTypes = {
  projectListPass: PropTypes.object,
  loginProjectModalDisplay: PropTypes.bool,
  selectedProjectId: PropTypes.string,
  selectedProjectHandle: PropTypes.func
};
// <Link style={links} to={routes.SELECTED_PROJECT}></Link>;
export default withRouter(ProjectList);
