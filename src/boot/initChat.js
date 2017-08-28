import * as Expo from 'expo';
import React from 'react';
import { toJS } from 'mobx';
import config from '../../config';

// Chat Socket Listener
export default function (stores, initFeathers) {
  const chat = initFeathers.service('groupsmessages');
  chat.on('created', (msg) => {
    if (stores.viewChat.initialID !== msg._id) {
      if (
        stores.viewChat.buildingGroupId !== 0 &&
        msg.groupId === stores.viewChat.buildingGroupId &&
        msg.user._id !== stores.domainUser.user._id
      ) {
        if (stores.viewView.appTabScreen !== 'chat') {
          stores.viewChat.increaseBuildingChatCount();
        }
      }
      stores.domainChat.newMessage(msg);
    }
  });
}
