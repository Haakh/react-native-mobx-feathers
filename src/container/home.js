import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { observer, inject } from 'mobx-react/native';
import { toJS } from 'mobx';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Header, Footer, FooterTab, Button, ListItem } from 'native-base';

@inject('viewHome', 'domainList')
@observer
class Home extends Component {
  componentDidMount() {
    this.props.domainList.changeList({
      id: 123,
      title: 'feed1',
      data: 'random text',
      live: true,
    });
  }

  keyExtractor = item => item.id;

  render() {
    return (
      <Container>
        <Content>
          <View>
            <Text>Chat with me Sydney</Text>
          </View>
          <FlatList
            data={toJS(this.props.domainList.list)}
            keyExtractor={this.keyExtractor}
            renderItem={({ item, index }) =>
              (<ListItem onPress={() => this.props.domainList.toggleLive(index)}>
                <Text>
                  {item.title}
                </Text>
                {item.live
                  ? <View style={{ height: 10, width: 10, backgroundColor: '#000' }} />
                  : <View style={{ height: 20, width: 20, backgroundColor: '#777' }} />}
              </ListItem>)}
          />
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
