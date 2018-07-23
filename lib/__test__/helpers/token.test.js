'use strict';

var _token = require('recrut-js/src/helpers/token');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('gets access-token', function () {
  _token2.default.set('123', '');
  expect(_token2.default.access() === '123').toBeTruthy();
});

it('gets refresh token', function () {
  _token2.default.set('', '123');
  expect(_token2.default.refresh() === '123').toBeTruthy();
});

it('sets access-token and refresh token', function () {
  _token2.default.set('123', '123');
  expect(_token2.default.access() === '123').toBeTruthy();
  expect(_token2.default.refresh() === '123').toBeTruthy();
});

it('deletes access-token and refresh token', function () {
  _token2.default.set('123', '123');
  expect(_token2.default.access() === '123').toBeTruthy();
  expect(_token2.default.refresh() === '123').toBeTruthy();

  _token2.default.remove();
  expect(!_token2.default.access()).toBeTruthy();
  expect(!_token2.default.refresh()).toBeTruthy();
});