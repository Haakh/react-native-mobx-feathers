import Expo from 'expo';
import React from 'react';
import { Provider } from 'mobx-react/native';
import { AppRegistry, View, BackAndroid, StatusBar } from 'react-native';
import { StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';

import Routes from '../container/routes';
import platform from '../../native-base-theme/variables/platform';

// import { enableLogging } from 'mobx-logger';

// if (process.env.NODE_ENV === 'development') {
//   enableLogging();
// } else {
//   console.log = function () {};
// }

export default function (stores) {
  return class Root extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoading: false,
        isReady: false,
      };
    }

    async componentWillMount() {
      await Expo.Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      });
      this.setState({ isReady: true });
    }

    render() {
      if (!this.state.isReady || this.state.isLoading) {
        return <Expo.AppLoading />;
      }

      return (
        <View style={{ flex: 1 }}>
          <StyleProvider style={getTheme(platform)}>
            <Provider {...stores}>
              <Routes />
            </Provider>
          </StyleProvider>
        </View>
      );
    }
  };
}
