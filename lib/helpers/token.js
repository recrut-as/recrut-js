'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalCookie = require('universal-cookie');

var _universalCookie2 = _interopRequireDefault(_universalCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookies = new _universalCookie2.default();

var ACCESS_TOKEN_LOCATION = 'access_token';
var REFRESH_TOKEN_LOCATION = 'refresh_token';

exports.default = {
  access: function access() {
    return cookies.get(ACCESS_TOKEN_LOCATION);
  },
  refresh: function refresh() {
    return cookies.get(REFRESH_TOKEN_LOCATION);
  },
  set: function set(access, refresh) {
    cookies.set(ACCESS_TOKEN_LOCATION, access, { path: '/', expires: new Date(Date.now() + 1000 * 60 * 60) });
    cookies.set(REFRESH_TOKEN_LOCATION, refresh, { path: '/', expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365) });
  },
  remove: function remove() {
    cookies.remove(ACCESS_TOKEN_LOCATION, { path: '/' });
    cookies.remove(REFRESH_TOKEN_LOCATION, { path: '/' });
  }
};