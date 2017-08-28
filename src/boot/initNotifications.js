import * as Expo from 'expo';
import React from 'react';
import { toJS } from 'mobx';
import config from '../../config';

export default async function (stores) {
  const token = await Expo.Notifications.getExponentPushTokenAsync();
  Expo.Notifications.addListener(listener);
  stores.viewView.isReadyApp(true);
  // Expo.Amplitude.logEvent('Logged in');
  stores.domainUser.setExpoToken(token);
  // TO REMOVE
  stores.domainUser.setDeviceId('000');
  // console.log('Token After Stores: ', token);
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
        stores.viewChat.groupName = notification.data.groupname;
        stores.viewChat.groupId = notification.data.groupid;
        stores.viewChat.toggleChatGroup(notification.data.groupid);
        stores.domainGroups.getUserGroups(notification.data.groupid);
        stores.viewChat.toggleChat(1);
      } else {
        console.log('Not BUilding: ', notification.data.groupname);
        stores.domainGroups.getUserGroups(notification.data.groupid);
        stores.viewChat.groupId = notification.data.groupid;
        stores.viewChat.groupName = notification.data.groupName;
        stores.viewChat.toggleChatGroup(notification.data.groupid);
        stores.viewFeed.changeTab('chat');
        stores.viewView.toggleAccess('globalchat');
      }
    } else {
      Expo.Amplitude.logEvent('Recieved Notification');
      console.log('not yett');
    }
  }
}
