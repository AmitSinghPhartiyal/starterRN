import React, { Element } from "react";
import {
  Scene,
  Router,
  Modal,
  Reducer,
  Drawer,
  Stack
} from "react-native-router-flux";
import { connect } from "react-redux";
import { StatusBar } from "react-native";
import LoginContainer from "../containers/LoginContainer";
import SignupContainer from "../containers/SignupContainer";
import ListContainer from "../containers/ListConatiner";
import SideMenu from "../components/SideMenu";

class Routes extends React.Component {
  render() {
    console.log("ROUTES PROPS", this.props.isLoggedIn);
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="login"
            hideNavBar
            initial={!this.props.isLoggedIn}
            component={LoginContainer}
          />
          <Scene key="signup" hideNavBar component={SignupContainer} />
          <Stack key="home" initial={this.props.isLoggedIn} hideNavBar>
            <Drawer key="drawer" drawer contentComponent={SideMenu} hideNavBar>
              <Scene
                key="list"
                title="Home"
                component={ListContainer}
                tintColor="#000"
              />
            </Drawer>
          </Stack>
        </Scene>
      </Router>
    );
  }
}
function mapUser(state) {
  return { isLoggedIn: state.appState.isLoggedIn };
}

export default connect(mapUser, {})(Routes);
