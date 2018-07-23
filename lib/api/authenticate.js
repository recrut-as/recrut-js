'use strict';

var _require = require('../helpers/methods'),
    POST = _require.POST;

var _require2 = require('../constants'),
    NO_AUTH = _require2.NO_AUTH;

var APIRequest = require('../helpers/request');

var token = require('../helpers/token');

module.exports = {
  register: function register(email, password) {
    return new APIRequest(POST, 'authenticate/register/', {
      email: email,
      password: password
    }, {
      options: [NO_AUTH]
    });
  },

  token: function token(email, password) {
    return new APIRequest(POST, 'authenticate/token/', {
      email: email,
      password: password
    }, {
      options: [NO_AUTH]
    });
  },

  validate: function validate(token) {
    // Not possible yet...
    return null;
  },

  revoke: function revoke() {
    if (token.access()) {
      return new APIRequest(POST, 'authenticate/token/revoke/', {
        token: token.access()
      }, {
        options: [NO_AUTH]
      });
    } else {
      return null;
    }
  },

  refresh: function refresh() {
    if (token.refresh()) {
      return new APIRequest(POST, 'authenticate/token/refresh/', {
        refresh: token.refresh()
      }, {
        options: [NO_AUTH]
      });
    } else {
      return null;
    }
  },

  convert: function convert(token) {
    return new APIRequest(POST, 'authenticate/token/convert/', {
      token: token
    }, {
      options: [NO_AUTH]
    });
  }
};