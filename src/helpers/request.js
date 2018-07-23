const {NO_AUTH, BASE} = require('../constants');
const {get, post, put, del, postFile, putFile, GET, POST, PUT, DELETE, POSTFILE, PUTFILE} = require('./methods');
const Token = require('./token');
const APIResponse = require('./response');

export default class APIRequest {
  constructor(method, url, data = {}, args = {}) {
    this.method = method;
    this.data = data;
    this.headers = {'Content-Type': 'application/json'};
    this.url = url;

    // Options
    if (!args.options || !args.options.includes(NO_AUTH)) {
      this.headers['Authorization'] = 'Bearer ' + Token.access();
    }
    if (args.handler) {
      this.handler = args.handler;
    }
  }

  response() {
    let request = null;
    if (this.method === GET) {
      let args = '';
      for (let key in this.data) {
        args += '&' + key + '=' + this.data[key];
      }
      request = new APIResponse(get(BASE + this.url, this.headers, args));
    } else if (this.method === POST) {
      request = new APIResponse(post(BASE + this.url, this.headers, this.data));
    } else if (this.method === PUT) {
      request = new APIResponse(put(BASE + this.url, this.headers, this.data));
    } else if (this.method === DELETE) {
      request = new APIResponse(del(BASE + this.url, this.headers, this.data));
    } else if (this.method === POSTFILE) {
      return postFile(BASE + this.url, this.data);
    } else if (this.method === PUTFILE) {
      return putFile(BASE + this.url, this.data);
    } else {
      return null;
    }
    return request.then(this.handler);
  }

  mockResponse(callbackData) {
    const request = Promise.resolve(callbackData);
    return request;
  }
}
