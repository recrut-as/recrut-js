'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putFile = exports.postFile = exports.del = exports.put = exports.post = exports.get = exports.PUTFILE = exports.POSTFILE = exports.DELETE = exports.PUT = exports.POST = exports.GET = undefined;

var _constants = require('../constants');

var _token = require('./token');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Generalized get and post methods, made with this api in mind.
var GET = exports.GET = 'GET';
var POST = exports.POST = 'POST';
var PUT = exports.PUT = 'PUT';
var DELETE = exports.DELETE = 'DELETE';
var POSTFILE = exports.POSTFILE = 'POSTFILE';
var PUTFILE = exports.PUTFILE = 'PUTFILE';

var get = exports.get = function get(url, headers, args) {
  return fetch(url + _constants.FORMAT + args, {
    method: 'GET',
    headers: headers
  }).catch(function (error) {
    console.log(error);
  });
};

var post = exports.post = function post(url, headers, data) {
  return fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  });
};

var put = exports.put = function put(url, headers, data) {
  return fetch(url, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(data)
  });
};

var del = exports.del = function del(url, headers, data) {
  return fetch(url, {
    method: 'DELETE',
    headers: headers,
    body: JSON.stringify(data)
  }).then(function (response) {
    return response.json();
  }).catch(function (error) {
    console.log(error);
  });
};

var postFile = exports.postFile = function postFile(url, data) {
  // Set data
  var fileData = new FormData();
  for (var key in data) {
    var k = key;
    fileData.append(k, data[k]);
  }

  var request = new XMLHttpRequest('Authorization', 'token');
  request.open('POST', url);
  request.setRequestHeader('Authorization', 'Bearer ' + _token2.default.access());

  // Send request
  request.send(fileData);
  return request;
};

var putFile = exports.putFile = function putFile(url, data) {
  // Set data
  var fileData = new FormData();
  for (var key in data) {
    fileData.append(key, data[key]);
  }

  var request = new XMLHttpRequest('Authorization', 'token');
  request.open('PUT', url);
  request.setRequestHeader('Authorization', 'Bearer ' + _token2.default.access());

  // Send request
  request.send(fileData);
  return request;
};