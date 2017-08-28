import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Content, Form, Item, Input, Label, Icon } from 'native-base';
import { observer, inject } from 'mobx-react/native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import LoginScreen from 'screens/login';

@inject('viewLogin', 'domainUser')
@observer
export default class Login extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return <LoginScreen onLogin={() => navigate('Home')} onSignup={() => navigate('SignUp')} />;
  }
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};
