import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { observer, inject } from 'mobx-react/native';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Header, Footer, FooterTab, Button } from 'native-base';

@inject('viewHome', 'domainList')
@observer
class Home extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View>
            <Text>Chat with me Sydney</Text>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Text>Hello there</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

Home.propTypes = {};

export default Home;
