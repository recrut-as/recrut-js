'use strict';

var Cookies = require('universal-cookie');

var cookies = new Cookies();

var ACCESS_TOKEN_LOCATION = 'access_token';
var REFRESH_TOKEN_LOCATION = 'refresh_token';

module.exports = {
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