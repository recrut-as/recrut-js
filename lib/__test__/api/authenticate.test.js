'use strict';

var _authenticate = require('recrut-js/src/api/authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

var _token = require('recrut-js/src/helpers/token');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EMAIL = '<email>';
var PASSWORD = '<password>';
var ACCESS_TOKEN = '<access-token>';
var REFRESH_TOKEN = '<refresh-token>';
var CONVERT_TOKEN = '<convert-token>';

it('register returns request without token', function () {
  var request = _authenticate2.default.register(EMAIL, PASSWORD);
  expect(request.url === '/v1/authenticate/register/');
  expect(request.data.email === EMAIL).toBeTruthy();
  expect(request.data.password === PASSWORD).toBeTruthy();
  expect(request.headers.Authenticate).toBeUndefined();
});

it('login returns request without token', function () {
  var request = _authenticate2.default.token(EMAIL, PASSWORD);
  expect(request.url === '/v1/authenticate/token/');
  expect(request.data.email === EMAIL).toBeTruthy();
  expect(request.data.password === PASSWORD).toBeTruthy();
  expect(request.headers.Authenticate).toBeUndefined();
});

it('validates token', function () {
  _token2.default.set(ACCESS_TOKEN, REFRESH_TOKEN);
  var request = _authenticate2.default.validate();
  expect(request).toBeNull();
});

it('revoke token', function () {
  _token2.default.set(ACCESS_TOKEN, REFRESH_TOKEN);
  var request = _authenticate2.default.revoke();
  expect(request.url === '/v1/authenticate/token/revoke/');
  expect(request.data.token === ACCESS_TOKEN).toBeTruthy();
  expect(request.headers.Authenticate).toBeUndefined();
});

it('login returns request without token', function () {
  var request = _authenticate2.default.convert(CONVERT_TOKEN);
  expect(request.url === '/v1/authenticate/token/convert/');
  expect(request.data.token === CONVERT_TOKEN).toBeTruthy();
  expect(request.headers.Authenticate).toBeUndefined();
});