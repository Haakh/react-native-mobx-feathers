// Feathers :
// ========================================
import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import socketio from 'feathers-socketio/client';
import config from '../../config';

if (!global._babelPolyfill) { require('babel-polyfill'); }

if (window.navigator && Object.keys(window.navigator).length === 0) {
  window = Object.assign(window, { navigator: { userAgent: 'ReactNative' } });
}

require('socket.io-client');

const io = require('socket.io-client');

const host = `${config.apiEndpoint}:${config.apiPort}`;
const options = { transports: ['websocket'] };
const socket = io(host, options);

// Set up Feathers client side
const app = feathers()
  .configure(socketio(socket))
  .configure(hooks());
// =======================================================


export default function Feathers() {
  return app;
}
