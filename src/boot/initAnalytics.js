import Expo from 'expo';
import React from 'react';
import { toJS } from 'mobx';
import config from '../../config';

export default function (stores) {
  Expo.Amplitude.initialize(config.amplitudeApikey);
  Expo.Amplitude.setUserProperties(toJS(stores.domainUser.user));
}
