import React, { Component } from "react";
import { PropTypes, View, Text, Button } from "react-native";
import { Content, Form, Item, Input, Label, Icon } from "native-base";
import { observer, inject } from "mobx-react/native";
import { StackNavigator } from "react-navigation";

export default class Login extends React.Component {
  static navigationOptions = {
    title: "Login"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Content>
        <View>
          <Form>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                flex: 1
              }}
            >
              <Item floatingLabel style={{ flex: 9 }}>
                <Label>Username</Label>
                <Input />
              </Item>
              <View style={{ flex: 1 }}>
                <View style={{ flex: 5 }} />
                <Icon style={{ flex: 1 }} active name="ionitron" />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                flex: 1
              }}
            >
              <Item floatingLabel style={{ flex: 9 }}>
                <Label>Password</Label>
                <Input />
              </Item>
              <View style={{ flex: 1 }}>
                <View style={{ flex: 5 }} />
                <Icon style={{ flex: 1 }} active name="finger-print" />
              </View>
            </View>
          </Form>

          <Button onPress={() => navigate("Home")} title="Login" />
          <Button onPress={() => navigate("SignUp")} title="SignUp" />
        </View>
      </Content>
    );
  }
}
