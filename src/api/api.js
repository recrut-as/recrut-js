import { POST, GET, PUT, DELETE, POSTFILE, PUTFILE } from '../helpers/methods';
import APIRequest from '../helpers/request';
import { get } from 'http';

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
  fetchOrganizations: () => {
    return new APIRequest(GET, 'organization/');
  },

  // Voting related
  putVote: (post, vote) => {
    return new APIRequest(POST, 'decision/', {posting: post.id, value: vote});
  },
  editVote: (id, vote) => {
    return new APIRequest(PUT, 'decision/'.concat(id, '/'), {value: vote});
  }

  // Profile related
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

  // Can change account info with a file (profileImage)
  putAccountInfo: (data) => {
    return new APIRequest(PUTFILE, 'account/me/', data);
  },
  // Can not change account info with a file (profileImage)
  putAccount: (data) => {
    return new APIRequest(PUT, 'account/me/', data);
  },
  putPostingInfo: (id, data) => {
    return new APIRequest(PUT, 'decision/'.concat(id, '/'), data);
  },
  changePassword: (passwordData) => {
    return new APIRequest(POST, 'account/password/', passwordData);
  },

  // Sharing and messages
  fetchSharings: () => {
    return new APIRequest(GET, 'sharing/');
  },
  fetchSharing: (id) => {
    return new APIRequest(GET, 'sharing/'.concat(id, '/'));
  },
  putSharing: (data) => {
    return new APIRequest(POST, 'sharing/', data);
  },
  deleteSharing: (id) => {
    return new APIRequest(DELETE, 'sharing/'.concat(id, '/'));
  },
  putMessage: (data) => {
    return new APIRequest(POST, 'message/', data);
  },
  fetchShareable: () => {
    return new APIRequest(GET, 'shareable/');
  }
};
