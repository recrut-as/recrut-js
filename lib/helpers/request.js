'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('../constants');

var _methods = require('./methods');

var _token = require('./token');

var _token2 = _interopRequireDefault(_token);

var _response = require('./response');

var _response2 = _interopRequireDefault(_response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var APIRequest = function () {
  function APIRequest(method, url) {
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var args = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, APIRequest);

    this.method = method;
    this.data = data;
    this.headers = { 'Content-Type': 'application/json' };
    this.url = url;

    // Options
    if (!args.options || !args.options.includes(_constants.NO_AUTH)) {
      this.headers['Authorization'] = 'Bearer ' + _token2.default.access();
    }
    if (args.handler) {
      this.handler = args.handler;
    }
  }

  _createClass(APIRequest, [{
    key: 'response',
    value: function response() {
      var request = null;
      if (this.method === _methods.GET) {
        var args = '';
        for (var key in this.data) {
          args += '&' + key + '=' + this.data[key];
        }
        request = new _response2.default((0, _methods.get)(_constants.BASE + this.url, this.headers, args));
      } else if (this.method === _methods.POST) {
        request = new _response2.default((0, _methods.post)(_constants.BASE + this.url, this.headers, this.data));
      } else if (this.method === _methods.PUT) {
        request = new _response2.default((0, _methods.put)(_constants.BASE + this.url, this.headers, this.data));
      } else if (this.method === _methods.DELETE) {
        request = new _response2.default((0, _methods.del)(_constants.BASE + this.url, this.headers, this.data));
      } else if (this.method === _methods.POSTFILE) {
        return (0, _methods.postFile)(_constants.BASE + this.url, this.data);
      } else if (this.method === _methods.PUTFILE) {
        return (0, _methods.putFile)(_constants.BASE + this.url, this.data);
      } else {
        return null;
      }
      return request.then(this.handler);
    }
  }, {
    key: 'mockResponse',
    value: function mockResponse(callbackData) {
      var request = Promise.resolve(callbackData);
      return request;
    }
  }]);

  return APIRequest;
}();

exports.default = APIRequest;