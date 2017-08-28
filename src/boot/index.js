import mobx from './mobx';
import components from './react';
// import initFeathersApp from './feathersApp';
// import initChat from './initChat';
// import initNotifications from './initNotifications';
// import initAnalytics from './initAnalytics';

export default function () {
  // const initFeathers = initFeathersApp();
  const stores = mobx();
  // initNotifications(stores);
  // initChat(stores, initFeathers);
  return components(stores);
}
