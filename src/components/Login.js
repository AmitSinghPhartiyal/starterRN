import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { login } from "../actions/LoginAction";
import { LoginButton, AccessToken, LoginManager } from "react-native-fbsdk";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "peter@klaven",
      password: "cityslicka"
    };
  }
  handleSubmit() {
    this.props.login();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Email :</Text>
        <TextInput
          style={{
            margin: 10,
            borderBottomColor: "#dadada",
            borderBottomWidth: 1
          }}
          value={this.state.email}
          onChangeText={email => {
            this.setState({ email });
          }}
          placeholder="email"
        />
        <Text style={{ margin: 10 }}>Password :</Text>
        <TextInput
          style={{
            margin: 10,
            borderBottomColor: "#dadada",
            borderBottomWidth: 1
          }}
          value={this.state.password}
          onChangeText={password => {
            this.setState({ password });
          }}
          placeholder="password"
        />
        {this.props.loginReducer.loading
          ? <TouchableOpacity style={{ margin: 10, alignItems: "center" }}>
              <ActivityIndicator />
            </TouchableOpacity>
          : <TouchableOpacity
              style={{ margin: 10, alignItems: "center" }}
              onPress={() => {
                this.handleSubmit();
              }}
            >
              <Text style={{ margin: 10 }}>Login</Text>
            </TouchableOpacity>}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <LoginButton
            publishPermissions={["publish_actions"]}
            onLoginFinished={(error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(data => {
                  console.log(data.accessToken.toString());
                });
              }
            }}
            onLogoutFinished={() => console.log("logout.")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff"
  }
});

function mapUser(state) {
  return {
    loginReducer: state.loginReducer,
    appState: state.appState
  };
}

export default connect(mapUser, { login })(Login);
