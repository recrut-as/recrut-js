import authenticate from 'recrut-js/src/api/authenticate';
import token from 'recrut-js/src/helpers/token';

const EMAIL = '<email>';
const PASSWORD = '<password>';
const ACCESS_TOKEN = '<access-token>';
const REFRESH_TOKEN = '<refresh-token>';
const CONVERT_TOKEN = '<convert-token>';

it('register returns request without token', () => {
  let request = authenticate.register(EMAIL, PASSWORD);
  expect(request.url === '/v1/authenticate/register/');
  expect(request.data.email === EMAIL).toBeTruthy();
  expect(request.data.password === PASSWORD).toBeTruthy();
  expect(request.headers.Authenticate).toBeUndefined();
});

it('login returns request without token', () => {
  let request = authenticate.token(EMAIL, PASSWORD);
  expect(request.url === '/v1/authenticate/token/');
  expect(request.data.email === EMAIL).toBeTruthy();
  expect(request.data.password === PASSWORD).toBeTruthy();
  expect(request.headers.Authenticate).toBeUndefined();
});

it('validates token', () => {
  token.set(ACCESS_TOKEN, REFRESH_TOKEN);
  let request = authenticate.validate();
  expect(request).toBeNull();
});

it('revoke token', () => {
  token.set(ACCESS_TOKEN, REFRESH_TOKEN);
  let request = authenticate.revoke();
  expect(request.url === '/v1/authenticate/token/revoke/');
  expect(request.data.token === ACCESS_TOKEN).toBeTruthy();
  expect(request.headers.Authenticate).toBeUndefined();
});

it('login returns request without token', () => {
  let request = authenticate.convert(CONVERT_TOKEN);
  expect(request.url === '/v1/authenticate/token/convert/');
  expect(request.data.token === CONVERT_TOKEN).toBeTruthy();
  expect(request.headers.Authenticate).toBeUndefined();
});
