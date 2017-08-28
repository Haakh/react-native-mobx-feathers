import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Content, Form, Item, Input, Label, Icon } from 'native-base';
import PropTypes from 'prop-types';

const SignUpScreen = props =>
  (<Content>
    <View>
      <Form>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <Item floatingLabel style={{ flex: 9 }}>
            <Label>Full Name</Label>
            <Input />
          </Item>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 5 }} />
            <Icon style={{ flex: 1 }} active name="person" />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <Item floatingLabel style={{ flex: 9 }}>
            <Label>email</Label>
            <Input />
          </Item>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 5 }} />
            <Icon style={{ flex: 1 }} active name="mail" />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <Item floatingLabel style={{ flex: 9 }}>
            <Label>Confirm Password</Label>
            <Input />
          </Item>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 5 }} />
            <Icon style={{ flex: 1 }} active name="finger-print" />
          </View>
        </View>
      </Form>

      <Button onPress={() => props.onSignup()} title="SignUp" />
    </View>
  </Content>);

export default SignUpScreen;

SignUpScreen.propTypes = {
  onSignup: PropTypes.func.isRequired,
};
