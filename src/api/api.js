import { POST, GET, PUT, DELETE, POSTFILE, PUTFILE } from '../helpers/methods';
import APIRequest from '../helpers/request';

// Api hooks for the app

export default {
  fetchRecommendations: () => {
    return new APIRequest(GET, 'recommended/');
  },
  fetchPostings: (query) => {
    return new APIRequest(GET, 'posting/', query);
  },
  fetchVotes: () => {
    return new APIRequest(GET, 'decision/');
  },
  fetchProfile: () => {
    return new APIRequest(GET, 'account/me/');
  },
  putVote: (post, vote) => {
    return new APIRequest(POST, 'decision/', {posting: post.id, value: vote});
  },
  uploadCV: (file) => {
    return new APIRequest(POSTFILE, 'cv/', {file: file});
  },
  fetchProfileInfo: () => {
    return new APIRequest(GET, 'profile/');
  },
  putProfileInfo: (dataType, data) => {
    return new APIRequest(POST, 'profile/'.concat(dataType, '/'), data);
  },
  editProfileInfo: (dataType, data) => {
    return new APIRequest(PUT, 'profile/'.concat(dataType, '/'), data);
  },
  deleteProfileInfo: (dataType, data) => {
    return new APIRequest(DELETE, 'profile/'.concat(dataType, '/'), data);
  },
  putAccountInfo: (data) => {
    return new APIRequest(PUTFILE, 'account/me/', data);
  },
  putPostingInfo: (id, data) => {
    return new APIRequest(PUT, 'decision/'.concat(id, '/'), data);
  },
  changePassword: (passwordData) => {
    return new APIRequest(POST, 'account/password/', passwordData);
  },
};
