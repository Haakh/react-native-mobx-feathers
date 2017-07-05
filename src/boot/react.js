import Expo from 'expo';
import React from 'react';
// import { Provider } from 'mobx-react/native';
import {
  AppRegistry,
  View,
  StatusBar,
} from 'react-native';
// import { StyleProvider } from 'native-base';
// import getTheme from '../../native-base-theme/components';

// import Routes from '../components/routes';
// import platform from '../../native-base-theme/variables/platform';
// import ViewStore from '../../src/store/View/ViewStore';

// import { enableLogging } from 'mobx-logger';

// if (process.env.NODE_ENV === 'development') {
//   enableLogging();
// } else {
//   console.log = function () {};
// }

export default function (stores) {
  return class Root extends React.Component {
    componentWillMount() {
        // if (this.stores.viewView.isModal) {
          // this.props.viewView.toggleModal();
        // }
        // console.log('ROUTEEE BOOT', stores.viewView.isModal);

      StatusBar.setBarStyle('light-content', true);
    }

    render() {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar
            backgroundColor="#fff"
            barStyle="light-content"
          />

        </View>
      );
    }
  }
}
