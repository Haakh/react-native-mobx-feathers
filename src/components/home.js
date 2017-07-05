import React, { Component } from 'react';
import {
  PropTypes,
  View,
  Text,
  Button,
} from 'react-native';
import { observer, inject } from 'mobx-react/native';
import { StackNavigator } from 'react-navigation';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View>
        <Text>Chat with me Sydney</Text>
      </View>
    );
  }
}
