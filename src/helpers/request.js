import {NO_AUTH, BASE} from '../constants';
import {get, post, put, del, fileRequest, GET, POST, PUT, DELETE, POSTFILE, PUTFILE, DELETEFILE} from './methods';
import Token from './token';
import APIResponse from './response';

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
        if(Array.isArray(this.data[key]) ) {
          for(let value in this.data[key]) {
            args += '&' + key + '=' + this.data[key][value];
          }
        } else {
          args += '&' + key + '=' + this.data[key];
        }
      }
      request = new APIResponse(get(BASE + this.url, this.headers, args));
    } else if (this.method === POST) {
      request = new APIResponse(post(BASE + this.url, this.headers, this.data));
    } else if (this.method === PUT) {
      request = new APIResponse(put(BASE + this.url, this.headers, this.data));
    } else if (this.method === DELETE) {
      request = new APIResponse(del(BASE + this.url, this.headers, this.data));
    } else if (this.method === POSTFILE) {
      return fileRequest(POST, BASE + this.url, this.data);
    } else if (this.method === PUTFILE) {
      return fileRequest(PUT, BASE + this.url, this.data);
    } else if (this.method === DELETEFILE) {
      return fileRequest(DELETE, BASE + this.url);
    } else {
      return null;
    }
    return request;
  }

  mockResponse(callbackData) {
    const request = Promise.resolve(callbackData);
    return request;
  }
}
