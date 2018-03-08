import React from 'react';
import { Link, withRouter,} from 'react-router-dom';
import * as routes from '../constants/routes';
import PropTypes from 'prop-types';


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

function ProjectList() {
  const links = {
    textDecoration: 'none',
    color: 'black',
  };
  return (
    <div className="ProjectListContainer">
      <style jsx>{`
          .ProjectListContainer {
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
          }
          .ProjectListDiv {
            font-size: 32px;
            width: 100%;
            display: block;
            height: 43px;
            border: 1px solid white;
            margin: 0 auto;
          }
          .ProjectListDivContent {
            text-align: center;
          }
          .projectListChildDiv {
            border: 1px solid white;
            width: 85%;
            overflow-y: scroll;
          }
          .Search {
            text-align: center;
            width: 85%;
          }
          ::-webkit-scrollbar {
            display: none;
          }
      `}</style>
      <div className="ProjectListMasterDiv">
        <h1>Project List</h1>
        <div className="projectListChildDiv">
          <input
            className="ProjectListDiv Search"
            type="text"
            placeholder="SEARCH FOR PROJECT"/>
          {Object.keys(projectListPass).map(function(projectId) {
            const project = projectListPass[projectId];
            return<Link style={links} to={routes.SELECTED_PROJECT}><div className="ProjectListDiv">
              <p className="ProjectListDivContent">{project.projectName}</p>
            </div>
            </Link>;
          })}
        </div>
      </div>
    </div>
  );
}
ProjectList.propTypes = {
  projectListPass: PropTypes.object
};

export default withRouter(ProjectList);
