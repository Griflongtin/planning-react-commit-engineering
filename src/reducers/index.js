import { combineReducers } from 'redux';
import sessionReducer from './session';
import usersReducer from './users';
import projectsReducer from './projects';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: usersReducer,
  projectState: projectsReducer,
});

export default rootReducer;
