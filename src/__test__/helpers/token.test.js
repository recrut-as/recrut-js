import token from 'recrut-js/src/helpers/token';

it('gets access-token', () => {
  token.set('123', '');
  expect(token.access() === '123').toBeTruthy();
});

it('gets refresh token', () => {
  token.set('', '123');
  expect(token.refresh() === '123').toBeTruthy();
});

it('sets access-token and refresh token', () => {
  token.set('123', '123');
  expect(token.access() === '123').toBeTruthy();
  expect(token.refresh() === '123').toBeTruthy();
});

it('deletes access-token and refresh token', () => {
  token.set('123', '123');
  expect(token.access() === '123').toBeTruthy();
  expect(token.refresh() === '123').toBeTruthy();

  token.remove();
  expect(!token.access()).toBeTruthy();
  expect(!token.refresh()).toBeTruthy();
});
