'use strict';

var _mock = require('recrut-js/src/api/mock');

var _mock2 = _interopRequireDefault(_mock);

var _schema = require('recrut-js/src/api/schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('converts access token', function () {
  expect(_schema2.default['v1/authentication/token/'].access_token === _mock2.default.convertAccessToken('Hello, token!').access_token).toBeTruthy();
});

it('fetch image from ', function () {
  _mock2.default.fetchRecommendations().mockResponse().then(function (response) {
    expect(response[0].id).toBeTruthy();
    expect(response[0].header).toBeTruthy();
    expect(response[0].body).toBeTruthy();
    expect(response[0].summary).toBeTruthy();
    expect(response[0].image).toBeTruthy();
    expect(response[0].kind).toBeTruthy();
    expect(response[0].industry).toBeTruthy();
    expect(response[0].field).toBeTruthy();
    expect(response[0].organization).toBeTruthy();
  });
});

it('converts image to image-url', function () {
  var fakeImage = new File([''], 'filename');
  _mock2.default.putAccountInfo({ avatar: fakeImage }).mockResponse().then(function (response) {
    console.log(response);
    expect(response.avatar).isString();
    expect(response.avatar).stringContaining('https://');
  });
});