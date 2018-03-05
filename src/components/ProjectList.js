import React from 'react';
import { Link, withRouter,} from 'react-router-dom';
import * as routes from '../constants/routes';


function ProjectList() {
  return (
    <div>
      <Link to={routes.SELECTED_PROJECT}_PROJECT>ProjectList</Link>
    </div>
  );
}

export default withRouter(ProjectList);
