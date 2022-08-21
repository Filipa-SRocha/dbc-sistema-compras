const INITIAL_STATE = {
  usersList: [],
};

function adminReducer(state = INITIAL_STATE, action) {
  if(action.type === 'GET_USERS_LIST') {
    return {
      usersList: action.list
    };
  }

  return state;
}

export default adminReducer;