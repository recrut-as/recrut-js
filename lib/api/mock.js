'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var schema = require('./schema');

var _require = require('../helpers/methods'),
    GET = _require.GET,
    POST = _require.POST;

var APIRequest = require('../helpers/request');

exports.default = {
  convertAccessToken: function convertAccessToken(accessToken) {
    if (accessToken == schema['v1/authentication/token/convert/'].access_token) {
      return {
        access_token: schema['v1/authentication/token/convert/'].access_token,
        refresh_token: schema['v1/authentication/token/convert/'].refresh_token
      };
    } else {
      return {
        error: 'no token'
      };
    }
  },
  fetchRecommendations: function fetchRecommendations() {
    return new APIRequest(GET, 'recommended/');
  },
  putAccountInfo: function putAccountInfo(data) {
    return new APIRequest(POST, 'account/me/', { avatar: data.avatar });
  }
};