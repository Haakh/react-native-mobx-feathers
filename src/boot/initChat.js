import * as Expo from 'expo';
import React from 'react';
import { toJS } from 'mobx';
import config from '../../config';

export default function (stores, initFeathers) {
  const chat = initFeathers.service('groupsmessages');
  chat.on('created', (msg) => {
    // console.log(msg);
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
      stores.viewChat.initialID = msg._id;
      stores.domainChat.newMessage(msg);
    }
    // if (msg.user._id !== this.props['domainUser].user._id) {
    //   if (this.props['viewView].appTabScreen !== 'chat') {
    //     this.props['viewChat].changeBadge();
    //   }
    // }
  });
}
