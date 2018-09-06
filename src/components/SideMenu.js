import React from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import { View, Text, TouchableOpacity } from "react-native";
import { logout } from "../actions/LogoutAction";
class SideMenu extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TouchableOpacity
          onPress={() => {
            alert("Under Development");
          }}
        >
          <Text>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert("Under Development");
          }}
        >
          <Text>Terms & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert("Under Development");
          }}
        >
          <Text>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.logout()}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapUser(state) {
  return {};
}

export default connect(mapUser, { logout })(SideMenu);
