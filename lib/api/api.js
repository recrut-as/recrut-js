'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methods = require('../helpers/methods');

var _request = require('../helpers/request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Api hooks for the app

exports.default = {
  fetchRecommendations: function fetchRecommendations() {
    return new _request2.default(_methods.GET, 'recommended/');
  },
  fetchPostings: function fetchPostings(query) {
    return new _request2.default(_methods.GET, 'posting/', { q: query });
  },
  fetchVotes: function fetchVotes() {
    return new _request2.default(_methods.GET, 'decision/');
  },
  fetchProfile: function fetchProfile() {
    return new _request2.default(_methods.GET, 'account/me/');
  },
  putVote: function putVote(post, vote) {
    return new _request2.default(_methods.POST, 'decision/', { posting: post.id, value: vote });
  },
  uploadCV: function uploadCV(file) {
    return new _request2.default(_methods.POSTFILE, 'cv/', { file: file });
  },
  fetchProfileInfo: function fetchProfileInfo() {
    return new _request2.default(_methods.GET, 'profile/');
  },
  putProfileInfo: function putProfileInfo(dataType, data) {
    return new _request2.default(_methods.POST, 'profile/'.concat(dataType, '/'), data);
  },
  editProfileInfo: function editProfileInfo(dataType, data) {
    return new _request2.default(_methods.PUT, 'profile/'.concat(dataType, '/'), data);
  },
  deleteProfileInfo: function deleteProfileInfo(dataType, data) {
    return new _request2.default(_methods.DELETE, 'profile/'.concat(dataType, '/'), data);
  },
  putAccountInfo: function putAccountInfo(data) {
    return new _request2.default(_methods.PUTFILE, 'account/me/', data);
  },
  putPostingInfo: function putPostingInfo(id, data) {
    return new _request2.default(_methods.PUT, 'decision/'.concat(id, '/'), data);
  },
  changePassword: function changePassword(passwordData) {
    return new _request2.default(_methods.POST, 'account/password/', passwordData);
  }
};