import React from 'react';
import { Provider } from 'mobx-react/native';
import { AppRegistry, View, BackAndroid, StatusBar } from 'react-native';
import { StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';

import Routes from '../container/routes';
import platform from '../../native-base-theme/variables/platform';
// import ViewStore from '../../src/store/View/ViewStore';

// import { enableLogging } from 'mobx-logger';

// if (process.env.NODE_ENV === 'development') {
//   enableLogging();
// } else {
//   console.log = function () {};
// }

export default function (stores) {
  return class Root extends React.Component {
    render() {
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
