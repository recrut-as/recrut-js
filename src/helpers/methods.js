import {FORMAT} from '../constants';
import token from './token';

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
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
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
