import {tryRefresh} from '../helpers/methods';

export default class APIResponse {
  constructor(response) {
    this.response = response.then((data) => {
      if (!data) {
          data = {};
      }

      this.isError = !data.ok;
      this.status = data.status;
      if(data.headers['Authorization']) {
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
