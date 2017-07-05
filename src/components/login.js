import React, { Component } from 'react';
import {
  PropTypes,
  View,
  Text,
  Button,
} from 'react-native';
import { observer, inject } from 'mobx-react/native';
import { StackNavigator } from 'react-navigation';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

render () {
    const { navigate } = this.props.navigation;
    return (
    <View>
        <Text>
            Hello There.
        </Text>
        <Button
          onPress={() => navigate('Home')}
          title="Login"
        />
        <Button
          onPress={() => navigate('SignUp')}
          title="SignUp"
        />
    </View>
    );
}
}