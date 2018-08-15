import { FORMAT } from '../constants';
import token from './token';
import AUTH from '../api/authenticate';
import APIRequest from './request';

// Generalized get and post methods, made with this api in mind.
export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const DELETE = 'DELETE';
export const POSTFILE = 'POSTFILE';
export const PUTFILE = 'PUTFILE';

export const get = (url, headers, args) => {
  return fetch(url + FORMAT + args, {
    method: 'GET',
    headers: headers,
  }).catch((error) => {
    console.log(error);
  });
};

export const post = (url, headers, data) => {
  return fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  });
};

export const put = (url, headers, data) => {
  return fetch(url, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(data),
  });
};

export const del = (url, headers, data) => {
  return fetch(url, {
    method: 'DELETE',
    headers: headers,
    body: JSON.stringify(data),
  });
};

export const postFile = (url, data) => {
  // Set data
  let fileData = new FormData();
  for (let key in data) {
    const k = key;
    fileData.append(k, data[k]);
  }

  let request = new XMLHttpRequest('Authorization', 'token');
  request.open('POST', url);
  request.setRequestHeader('Authorization', 'Bearer ' + token.access());

  // Send request
  request.send(fileData);
  return request;
};

export const putFile = (url, data) => {
  // Set data
  let fileData = new FormData();
  for (let key in data) {
    fileData.append(key, data[key]);
  }

  let request = new XMLHttpRequest('Authorization', 'token');
  request.open('PUT', url);
  request.setRequestHeader('Authorization', 'Bearer ' + token.access());

  // Send request
  request.send(fileData);
  return request;
};

// Refresh token
export const tryRefresh = (status) => {
  // If status is valid, return
  // Should only refresh token if response-code is 401
  if (status !== 401 || !token.refresh()) {
    return;
  }

  const request = AUTH.refresh();
  const response = (request)? request.response() : Promise.resolve();
  response.then((data) => {
    if(response.isError === false) {
      token.set(data.access_token, data.refresh_token, data.expires_in);
    } else if(response.status <= 500) {
      token.remove();
    }
    location.reload();
  });
}