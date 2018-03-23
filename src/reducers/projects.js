const INITIAL_STATE = {
  projects: {},
};

const applySetProjects = (state, action) => ({
  ...state,
  projects: action.projects
});

function projectsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
  case 'PROJECTS_SET' : {
    return applySetProjects(state, action);
  }
  default : return state;
  }
}

export default projectsReducer;
