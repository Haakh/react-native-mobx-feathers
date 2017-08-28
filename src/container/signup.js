import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Content, Form, Item, Input, Label, Icon } from 'native-base';
import { observer, inject } from 'mobx-react/native';
import { StackNavigator } from 'react-navigation';
import SignUpScreen from '../../storybook/stories/screens/signup';

export default class SignUp extends React.Component {
  static navigationOptions = {
    title: 'SignUp',
  };

  render() {
    const { navigate } = this.props.navigation;
    return <SignUpScreen onSignup={() => navigate('Home')} />;
  }
}
