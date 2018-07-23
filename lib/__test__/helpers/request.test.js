'use strict';

var _request = require('recrut-js/src/helpers/request');

var _request2 = _interopRequireDefault(_request);

var _methods = require('recrut-js/src/helpers/methods');

var _constants = require('recrut-js/src/constants');

var _token = require('../../helpers/token');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('creates a empty request', function () {
  var r = new _request2.default(_methods.GET, 'google.com');
  expect(r).toBeDefined();
});

it('creates a request with headers and body', function () {
  var r = new _request2.default(_methods.POST, 'google.com', { message: 'Hello world!' });
  expect(r).toBeDefined();
  expect(r.data.message === 'Hello world!');
});

it('creates a request with authorization', function () {
  _token2.default.set('123', '');
  var r = new _request2.default(_methods.POST, 'google.com', { message: 'Hello world!' }, []);
  expect(r).toBeDefined();
  expect(r.headers['Authorization']).toBeDefined();
});

it('creates a request without authorization', function () {
  _token2.default.set('123', '');
  var r = new _request2.default(_methods.POST, 'google.com', { message: 'Hello world!' }, { options: [_constants.NO_AUTH] });
  expect(r).toBeDefined();
  expect(r.headers.Authorization).toBeUndefined();
});

it('creates a request with handler', function () {
  var r = new _request2.default(_methods.POST, 'google.com', { message: 'Hello world!' }, { options: [_constants.NO_AUTH], handler: function handler() {
      return 'Cool';
    } });
  expect(r.handler()).toBeDefined();
});