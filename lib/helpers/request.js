'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = require('../constants'),
    NO_AUTH = _require.NO_AUTH,
    BASE = _require.BASE;

var _require2 = require('./methods'),
    get = _require2.get,
    post = _require2.post,
    put = _require2.put,
    del = _require2.del,
    postFile = _require2.postFile,
    putFile = _require2.putFile,
    GET = _require2.GET,
    POST = _require2.POST,
    PUT = _require2.PUT,
    DELETE = _require2.DELETE,
    POSTFILE = _require2.POSTFILE,
    PUTFILE = _require2.PUTFILE;

var Token = require('./token');
var APIResponse = require('./response');

module.exports = function () {
  function APIRequest(method, url) {
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var args = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, APIRequest);

    this.method = method;
    this.data = data;
    this.headers = { 'Content-Type': 'application/json' };
    this.url = url;

    // Options
    if (!args.options || !args.options.includes(NO_AUTH)) {
      this.headers['Authorization'] = 'Bearer ' + Token.access();
    }
    if (args.handler) {
      this.handler = args.handler;
    }
  }

  _createClass(APIRequest, [{
    key: 'response',
    value: function response() {
      var request = null;
      if (this.method === GET) {
        var args = '';
        for (var key in this.data) {
          args += '&' + key + '=' + this.data[key];
        }
        request = new APIResponse(get(BASE + this.url, this.headers, args));
      } else if (this.method === POST) {
        request = new APIResponse(post(BASE + this.url, this.headers, this.data));
      } else if (this.method === PUT) {
        request = new APIResponse(put(BASE + this.url, this.headers, this.data));
      } else if (this.method === DELETE) {
        request = new APIResponse(del(BASE + this.url, this.headers, this.data));
      } else if (this.method === POSTFILE) {
        return postFile(BASE + this.url, this.data);
      } else if (this.method === PUTFILE) {
        return putFile(BASE + this.url, this.data);
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