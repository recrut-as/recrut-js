const {FORMAT} = require('../constants');
const token = require('./token');

// Generalized get and post methods, made with this api in mind.

module.exports.GET = 'GET';
module.exports.POST = 'POST';
module.exports.PUT = 'PUT';
module.exports.DELETE = 'DELETE';
module.exports.POSTFILE = 'POSTFILE';
module.exports.PUTFILE = 'PUTFILE';

module.exports.get = (url, headers, args) => {
  return fetch(url + FORMAT + args, {
    method: 'GET',
    headers: headers,
  }).catch((error) => {
    console.log(error);
  });
};

module.exports.post = (url, headers, data) => {
  return fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  });
};

module.exports.put = (url, headers, data) => {
  return fetch(url, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(data),
  });
};

module.exports.del = (url, headers, data) => {
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

module.exports.postFile = (url, data) => {
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

module.exports.putFile = (url, data) => {
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
