const schema = require('./schema');
const {GET, POST} = require('../helpers/methods');
const APIRequest = require('../helpers/request');

export default {
  convertAccessToken: (accessToken) => {
    if (
      accessToken == schema['v1/authentication/token/convert/'].access_token
    ) {
      return {
        access_token: schema['v1/authentication/token/convert/'].access_token,
        refresh_token: schema['v1/authentication/token/convert/'].refresh_token,
      };
    } else {
      return {
        error: 'no token',
      };
    }
  },
  fetchRecommendations: () => {
    return new APIRequest(GET, 'recommended/');
  },
  putAccountInfo: (data) => {
    return new APIRequest(POST, 'account/me/', {avatar: data.avatar});
  },
};
