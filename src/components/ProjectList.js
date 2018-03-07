import React from 'react';
import { Link, withRouter,} from 'react-router-dom';
import * as routes from '../constants/routes';
import PropTypes from 'prop-types';

function ProjectList(props) {
  return (
    <div className="ProjectListContainer">
      <style jsx>{`
          .ProjectListContainer {
            width: 85%;
            display: flex;
            justify-content: center;
            background-color: red;
          }
      `}</style>
      <h1>Project List</h1>
      <div className="ProjectListDiv">
        {Object.key(props.projectListPass).map((projectId) => {
          const project = props.projectListPass[projectId];
          return<div>
            <h4>{project.projectName}</h4>
            <h4>{project.projectMaker}</h4>
          </div>;
        })}

      </div>
    </div>
  );
}
ProjectList.propTypes = {
  authUser: PropTypes.any,
  projectListPass: PropTypes.object
};

// <Link to={routes.SELECTED_PROJECT}_PROJECT>ProjectList</Link>
export default withRouter(ProjectList);
