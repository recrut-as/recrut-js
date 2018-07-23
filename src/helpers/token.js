const Cookies = require('universal-cookie');

const cookies = new Cookies();

const ACCESS_TOKEN_LOCATION = 'access_token';
const REFRESH_TOKEN_LOCATION = 'refresh_token';

export default {
  access() {
    return cookies.get(ACCESS_TOKEN_LOCATION);
  },

  refresh() {
    return cookies.get(REFRESH_TOKEN_LOCATION);
  },

  set(access, refresh) {
    cookies.set(ACCESS_TOKEN_LOCATION, access, { path: '/' });
    cookies.set(REFRESH_TOKEN_LOCATION, refresh, { path: '/' });
  },

  remove() {
    cookies.remove(ACCESS_TOKEN_LOCATION, { path: '/' });
    cookies.remove(REFRESH_TOKEN_LOCATION, { path: '/' });
  },
};
