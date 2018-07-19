import { POST } from '../helpers/methods';
import { NO_AUTH } from '../constants';
import APIRequest from '../helpers/request';

import token from '../helpers/token';

export default {
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
