'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methods = require('../helpers/methods');

var _constants = require('../constants');

var _request = require('../helpers/request');

var _request2 = _interopRequireDefault(_request);

var _token = require('../helpers/token');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  register: function register(email, password) {
    return new _request2.default(_methods.POST, 'authenticate/register/', {
      email: email,
      password: password
    }, {
      options: [_constants.NO_AUTH]
    });
  },

  token: function token(email, password) {
    return new _request2.default(_methods.POST, 'authenticate/token/', {
      email: email,
      password: password
    }, {
      options: [_constants.NO_AUTH]
    });
  },

  validate: function validate(token) {
    // Not possible yet...
    return null;
  },

  revoke: function revoke() {
    if (_token2.default.access()) {
      return new _request2.default(_methods.POST, 'authenticate/token/revoke/', {
        token: _token2.default.access()
      }, {
        options: [_constants.NO_AUTH]
      });
    } else {
      return null;
    }
  },

  refresh: function refresh() {
    if (_token2.default.refresh()) {
      return new _request2.default(_methods.POST, 'authenticate/token/refresh/', {
        refresh: _token2.default.refresh()
      }, {
        options: [_constants.NO_AUTH]
      });
    } else {
      return null;
    }
  },

  convert: function convert(token) {
    return new _request2.default(_methods.POST, 'authenticate/token/convert/', {
      token: token
    }, {
      options: [_constants.NO_AUTH]
    });
  }
};