'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

var _methods = require('../helpers/methods');

var _request = require('../helpers/request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  convertAccessToken: function convertAccessToken(accessToken) {
    if (accessToken == _schema2.default['v1/authentication/token/convert/'].access_token) {
      return {
        access_token: _schema2.default['v1/authentication/token/convert/'].access_token,
        refresh_token: _schema2.default['v1/authentication/token/convert/'].refresh_token
      };
    } else {
      return {
        error: 'no token'
      };
    }
  },
  fetchRecommendations: function fetchRecommendations() {
    return new _request2.default(_methods.GET, 'recommended/');
  },
  putAccountInfo: function putAccountInfo(data) {
    return new _request2.default(_methods.POST, 'account/me/', { avatar: data.avatar });
  }
};