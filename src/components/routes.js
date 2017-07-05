import React, { Component } from 'react';
import {
  PropTypes,
  View,
  Text,
  Button,
} from 'react-native';
import { observer, inject } from 'mobx-react/native';
import { StackNavigator } from 'react-navigation';
import Login from './login';
import Home from './home';
import SignUp from './signup';

// @inject('viewView', 'domainUser')
// @observer
// class App extends Component {
//   static navigationOptions = {
//     title: 'Login',
//   };

//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//     <View>
//         <Text>
//             Hello There.
//         </Text>
//         <Button
//           onPress={() => navigate('Chat')}
//           title="Login"
//         />
//         <Button
//           onPress={() => navigate('Chat')}
//           title="SignUp"
//         />

//     </View>
//     );
//   }
// }


// class ChatScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Chat with Lucy',
//   };

//   render() {
//     return (
//       <View>
//         <Text>Chat with Lucy</Text>
//       </View>
//     );
//   }
// }


export default SimpleApp = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  SignUp: { screen: SignUp },
});
