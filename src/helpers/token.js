const Cookies = require('universal-cookie');

const cookies = new Cookies();

const ACCESS_TOKEN_LOCATION = 'access_token';
const REFRESH_TOKEN_LOCATION = 'refresh_token';

const getExpireDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 10);
  return date;
}

module.exports = {
  access() {
    return cookies.get(ACCESS_TOKEN_LOCATION);
  },

  refresh() {
    return cookies.get(REFRESH_TOKEN_LOCATION);
  },

  set(access, refresh) {
    cookies.set(ACCESS_TOKEN_LOCATION, access, { path: '/', expires: getExpireDate(),});
    cookies.set(REFRESH_TOKEN_LOCATION, refresh, { path: '/', expires: getExpireDate(),});
  },

  remove() {
    cookies.remove(ACCESS_TOKEN_LOCATION, { path: '/' });
    cookies.remove(REFRESH_TOKEN_LOCATION, { path: '/' });
  },
};
