import * as Expo from 'expo';
import React from 'react';
import { toJS } from 'mobx';
import config from '../../config';

export default async function (stores) {
  const token = await Expo.Notifications.getExponentPushTokenAsync();
  stores.viewView.isReadyApp(true);
  stores.domainUser.setExpoToken(token);
  // TO REMOVE
  stores.domainUser.setDeviceId('000');
  function listener(notification) {
    console.log('NOTI', notification);
    if (notification.origin === 'selected') {
      Expo.Amplitude.logEvent('Selected Notification');
      console.log('NOTIF', notification.data.groupid, '    ', stores.viewChat.buildingGroupId);
      // Check for which group then link accordingly.
      if (notification.data.groupid === stores.viewChat.buildingGroupId) {
        console.log('Building Not');
        stores.viewView.toggleTab('chat');
        stores.viewChat.resetBuildingChatCount();
        stores.viewChat.toggleChatGroup(notification.data.groupid);
        stores.domainGroups.getUserGroups(notification.data.groupid);
        stores.viewChat.toggleChat(1);
      } else {
        console.log('Not BUilding: ', notification.data.groupname);
        stores.domainGroups.getUserGroups(notification.data.groupid);
        stores.viewChat.toggleChatGroup(notification.data.groupid);
        stores.viewFeed.changeTab('chat');
        stores.viewView.toggleAccess('globalchat');
      }
    } else {
      Expo.Amplitude.logEvent('Recieved Notification');
      console.log('not yett');
    }
  }
  Expo.Notifications.addListener(listener);
}
