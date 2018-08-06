export default class APIResponse {
  constructor(response) {
    this.response = response;

    this.response.then((data) => {
      if (!data) {
        return;
      }

      this.isError = !data.ok;
      this.status = data.status;
      return data;
    });
  }

  isError() {
    return this.isError;
  }

  errorMessage() {
    return this.statusText;
  }

  isAuthorized() {
    return this.status !== 401;
  }

  then() {
    return this.response.then((response) => {
      return ((response && response.json)? response.json() : null);
    });
  }
}
