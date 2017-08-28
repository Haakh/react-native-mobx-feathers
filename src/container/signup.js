import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Content, Form, Item, Input, Label, Icon } from 'native-base';
import { observer, inject } from 'mobx-react/native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import SignUpScreen from '../../storybook/stories/screens/signup';

@inject('viewSignUp')
@observer
export default class SignUp extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return <SignUpScreen onSignup={() => navigate('Home')} />;
  }
}

SignUp.propTypes = {
  navigation: PropTypes.object.isRequired,
};
