const { POST } = require('../helpers/methods');
const { NO_AUTH } = require( '../constants');
const APIRequest = require('../helpers/request');

const token = require('../helpers/token');

module.exports = {
  register: (email, password) => {
    return new APIRequest(
      POST,
      'authenticate/register/',
      {
        email: email,
        password: password,
      },
      {
        options: [NO_AUTH],
      }
    );
  },

  token: (email, password) => {
    return new APIRequest(
      POST,
      'authenticate/token/',
      {
        email: email,
        password: password,
      },
      {
        options: [NO_AUTH],
      }
    );
  },

  validate: token => {
    // Not possible yet...
    return null;
  },

  revoke: () => {
    if (token.access()) {
      return new APIRequest(
        POST,
        'authenticate/token/revoke/',
        {
          token: token.access(),
        },
        {
          options: [NO_AUTH],
        }
      );
    } else {
      return null;
    }
  },

  refresh: () => {
    if (token.refresh()) {
      return new APIRequest(
        POST,
        'authenticate/token/refresh/',
        {
          refresh: token.refresh(),
        },
        {
          options: [NO_AUTH],
        }
      );
    } else {
      return null;
    }
  },

  convert: token => {
    return new APIRequest(
      POST,
      'authenticate/token/convert/',
      {
        token: token,
      },
      {
        options: [NO_AUTH],
      }
    );
  },
};
