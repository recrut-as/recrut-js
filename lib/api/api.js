'use strict';

var _require = require('../helpers/methods'),
    POST = _require.POST,
    GET = _require.GET,
    PUT = _require.PUT,
    DELETE = _require.DELETE,
    POSTFILE = _require.POSTFILE,
    PUTFILE = _require.PUTFILE;

var APIRequest = require('../helpers/request');

// Api hooks for the app

module.exports = {
  fetchRecommendations: function fetchRecommendations() {
    return new APIRequest(GET, 'recommended/');
  },
  fetchPostings: function fetchPostings(query) {
    return new APIRequest(GET, 'posting/', { q: query });
  },
  fetchVotes: function fetchVotes() {
    return new APIRequest(GET, 'decision/');
  },
  fetchProfile: function fetchProfile() {
    return new APIRequest(GET, 'account/me/');
  },
  putVote: function putVote(post, vote) {
    return new APIRequest(POST, 'decision/', { posting: post.id, value: vote });
  },
  uploadCV: function uploadCV(file) {
    return new APIRequest(POSTFILE, 'cv/', { file: file });
  },
  fetchProfileInfo: function fetchProfileInfo() {
    return new APIRequest(GET, 'profile/');
  },
  putProfileInfo: function putProfileInfo(dataType, data) {
    return new APIRequest(POST, 'profile/'.concat(dataType, '/'), data);
  },
  editProfileInfo: function editProfileInfo(dataType, data) {
    return new APIRequest(PUT, 'profile/'.concat(dataType, '/'), data);
  },
  deleteProfileInfo: function deleteProfileInfo(dataType, data) {
    return new APIRequest(DELETE, 'profile/'.concat(dataType, '/'), data);
  },
  putAccountInfo: function putAccountInfo(data) {
    return new APIRequest(PUTFILE, 'account/me/', data);
  },
  putPostingInfo: function putPostingInfo(id, data) {
    return new APIRequest(PUT, 'decision/'.concat(id, '/'), data);
  },
  changePassword: function changePassword(passwordData) {
    return new APIRequest(POST, 'account/password/', passwordData);
  }
};