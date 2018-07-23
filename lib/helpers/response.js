"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function APIResponse(response) {
    var _this = this;

    _classCallCheck(this, APIResponse);

    this.response = response;

    this.response.then(function (data) {
      if (!data) {
        return;
      }

      _this.isError = !data.ok;
      _this.status = data.status;
      return data;
    });
  }

  _createClass(APIResponse, [{
    key: "isError",
    value: function isError() {
      return this.isError;
    }
  }, {
    key: "errorMessage",
    value: function errorMessage() {
      return this.statusText;
    }
  }, {
    key: "isAuthorized",
    value: function isAuthorized() {
      return this.status !== 401;
    }
  }, {
    key: "then",
    value: function then() {
      return this.response.then(function (response) {
        return response ? response.json() : null;
      });
    }
  }]);

  return APIResponse;
}();