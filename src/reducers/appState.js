// @flow
const INITIAL_STATE = {
  isLoggedIn: false
};

function appState(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
}

export default appState;
