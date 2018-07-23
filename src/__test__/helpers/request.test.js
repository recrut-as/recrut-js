import APIRequest from 'recrut-js/src/helpers/request';

import {GET, POST} from 'recrut-js/src/helpers/methods';
import {NO_AUTH} from 'recrut-js/src/constants';

import token from '../../helpers/token';

it('creates a empty request', () => {
  let r = new APIRequest(GET, 'google.com');
  expect(r).toBeDefined();
});

it('creates a request with headers and body', () => {
  let r = new APIRequest(POST, 'google.com', { message: 'Hello world!' });
  expect(r).toBeDefined();
  expect(r.data.message === 'Hello world!');
});

it('creates a request with authorization', () => {
  token.set('123', '');
  let r = new APIRequest(POST, 'google.com', { message: 'Hello world!' }, []);
  expect(r).toBeDefined();
  expect(r.headers['Authorization']).toBeDefined();
});

it('creates a request without authorization', () => {
  token.set('123', '');
  let r = new APIRequest(
    POST,
    'google.com',
    { message: 'Hello world!' },
    { options: [NO_AUTH] }
  );
  expect(r).toBeDefined();
  expect(r.headers.Authorization).toBeUndefined();
});

it('creates a request with handler', () => {
  let r = new APIRequest(
    POST,
    'google.com',
    { message: 'Hello world!' },
    { options: [NO_AUTH], handler: () => 'Cool' }
  );
  expect(r.handler()).toBeDefined();
});
