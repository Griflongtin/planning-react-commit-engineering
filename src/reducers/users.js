const INITIAL_STATE = {
  user: {},
};

const applySetUsers = (state, action) => ({
  ...state,
  user: action.user
});

function usersReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
  case 'USERS_SET' : {
    return applySetUsers(state, action);
  }
  case 'USER_SET' : {
    return state;
  }
  default : return state;
  }
}

export default usersReducer;
