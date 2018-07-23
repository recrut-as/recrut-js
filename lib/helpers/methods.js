'use strict';

var _require = require('../constants'),
    FORMAT = _require.FORMAT;

var token = require('./token');

// Generalized get and post methods, made with this api in mind.

module.exports.GET = 'GET';
module.exports.POST = 'POST';
module.exports.PUT = 'PUT';
module.exports.DELETE = 'DELETE';
module.exports.POSTFILE = 'POSTFILE';
module.exports.PUTFILE = 'PUTFILE';

module.exports.get = function (url, headers, args) {
  return fetch(url + FORMAT + args, {
    method: 'GET',
    headers: headers
  }).catch(function (error) {
    console.log(error);
  });
};

module.exports.post = function (url, headers, data) {
  return fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  });
};

module.exports.put = function (url, headers, data) {
  return fetch(url, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(data)
  });
};

module.exports.del = function (url, headers, data) {
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

module.exports.postFile = function (url, data) {
  // Set data
  var fileData = new FormData();
  for (var key in data) {
    var k = key;
    fileData.append(k, data[k]);
  }

  var request = new XMLHttpRequest('Authorization', 'token');
  request.open('POST', url);
  request.setRequestHeader('Authorization', 'Bearer ' + token.access());

  // Send request
  request.send(fileData);
  return request;
};

module.exports.putFile = function (url, data) {
  // Set data
  var fileData = new FormData();
  for (var key in data) {
    fileData.append(key, data[key]);
  }

  var request = new XMLHttpRequest('Authorization', 'token');
  request.open('PUT', url);
  request.setRequestHeader('Authorization', 'Bearer ' + token.access());

  // Send request
  request.send(fileData);
  return request;
};