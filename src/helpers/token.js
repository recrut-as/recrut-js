import Cookies from 'universal-cookie';

const cookies = new Cookies();

const ACCESS_TOKEN_LOCATION = 'access_token';
const REFRESH_TOKEN_LOCATION = 'refresh_token';

const INTERCOM_TOKEN_LOCATION = 'intercom-session-w7prdvjh';

export default {
  access() {
    return cookies.get(ACCESS_TOKEN_LOCATION);
  },

  refresh() {
    return cookies.get(REFRESH_TOKEN_LOCATION);
  },

  set(access, refresh, expires_in=36000) {
    cookies.set(ACCESS_TOKEN_LOCATION, access, { path: '/', expires: new Date(Date.now() + expires_in*1000)});
    cookies.set(REFRESH_TOKEN_LOCATION, refresh, { path: '/', expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365)});
  },

  remove() {
    cookies.remove(ACCESS_TOKEN_LOCATION, { path: '/' });
    cookies.remove(REFRESH_TOKEN_LOCATION, { path: '/' });
    cookies.remove(INTERCOM_TOKEN_LOCATION, { path: '/'});
  },

  setWithPath(access, refresh, domain, expires_in=36000) {
    cookies.set(ACCESS_TOKEN_LOCATION, access, { path: '/', domain: domain, expires: new Date(Date.now() + expires_in*1000)});
    cookies.set(REFRESH_TOKEN_LOCATION, refresh, { path: '/', domain: domain, expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365)});
  },
};
