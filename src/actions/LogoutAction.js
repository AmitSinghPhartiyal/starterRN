import { Actions } from "react-native-router-flux";
export function logout() {
  return (dispatch, getstate) => {
    //eslint-disable-line
    dispatch({ type: "LOGOUT" });
    Actions.drawerClose();
    Actions.login();
  };
}
