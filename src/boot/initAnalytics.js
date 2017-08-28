import * as Expo from 'expo';
import React from 'react';
import { toJS } from 'mobx';
import config from '../../config';

export default function (stores) {
  Expo.Amplitude.initialize(config.amplitudeApikey);
  console.log(toJS(stores.domainUser.user));
  Expo.Amplitude.setUserProperties(toJS(stores.domainUser.user));
}
