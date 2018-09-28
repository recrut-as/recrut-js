import {tryRefresh} from '../helpers/methods';

export default class APIResponse {
  constructor(response, withAuth = true) {
    this.response = response.then((data) => {
      data = data || {};

      this.isError = !data.ok;
      this.status = data.status;
     if (withAuth === true) {
      tryRefresh(data.status);
     }
      
      return (data.json)? data.json() : data;
    }).catch((error) => console.log(error));
  }

  hasError() {
    return this.isError === true;
  }

  errorMessage() {
    return this.statusText;
  }

  isAuthorized() {
    return this.status !== 401;
  }

  then(method) {
    return this.response.then(method);
  }
}
