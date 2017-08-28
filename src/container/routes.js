import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { observer, inject } from 'mobx-react/native';
import { StackNavigator } from 'react-navigation';
import Login from './login';
import Home from './home';
import SignUp from './signup';

const stackNavigatorConfig = {
  initialRouteName: 'Login',
};

export default (SimpleApp = StackNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home },
    SignUp: { screen: SignUp },
  },
  stackNavigatorConfig,
));
