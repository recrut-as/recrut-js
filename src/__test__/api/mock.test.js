import mock from 'recrut-js/src/api/mock';
import schema from 'recrut-js/src/api/schema';

it('converts access token', () => {
  expect(
    schema['v1/authentication/token/'].access_token ===
      mock.convertAccessToken('Hello, token!').access_token
  ).toBeTruthy();
});

it('fetch image from ', () => {
  mock
    .fetchRecommendations()
    .mockResponse()
    .then((response) => {
      expect(response[0].id).toBeTruthy();
      expect(response[0].header).toBeTruthy();
      expect(response[0].body).toBeTruthy();
      expect(response[0].summary).toBeTruthy();
      expect(response[0].image).toBeTruthy();
      expect(response[0].kind).toBeTruthy();
      expect(response[0].industry).toBeTruthy();
      expect(response[0].field).toBeTruthy();
      expect(response[0].organization).toBeTruthy();
    });
});

it('converts image to image-url', () => {
  const fakeImage = new File([''], 'filename');
  mock
    .putAccountInfo({avatar: fakeImage})
    .mockResponse()
    .then((response) => {
      console.log(response);
      expect(response.avatar).isString();
      expect(response.avatar).stringContaining('https://');
    });
});
