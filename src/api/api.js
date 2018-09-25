import { POST, GET, PUT, DELETE, POSTFILE, PUTFILE, DELETEFILE } from '../helpers/methods';
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
  fetchVotes: (page=1) => {
    return new APIRequest(GET, 'decision/', {page: page});
  },
  fetchProfile: () => {
    return new APIRequest(GET, 'account/me/');
  },
  fetchOrganizations: () => {
    return new APIRequest(GET, 'company/');
  },
  fetchPartners: () => {
    return new APIRequest(GET, 'company/partner/');
  },

  // Voting related
  putVote: (post, vote) => {
    return new APIRequest(POST, 'decision/', {posting: post.id, value: vote});
  },
  editVote: (id, vote) => {
    return new APIRequest(PUT, 'decision/'.concat(id, '/'), {value: vote});
  },
  deleteVote: (id) => {
    return new APIRequest(DELETE, 'decision/'.concat(id, '/'));
  },

  // Profile related
  uploadCV: (file) => {
    return new APIRequest(POSTFILE, 'profile/cv/', {file: file});
  },
  deleteCV: (id) => {
    return new APIRequest(DELETEFILE, 'profile/cv/'.concat(id,'/'));
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
  fetchDegrees: () => {
    return new APIRequest(GET, 'profile/degree/');
  },
  fetchInstitutions: () => {
    return new APIRequest(GET, 'profile/degree/institution/');
  },
  fetchMajors: () => {
    return new APIRequest(GET, 'profile/degree/major/');
  },
  fetchMajor: (id) => {
    return new APIRequest(GET, 'profile/degree/major/'.concat(id, '/'));
  },
  putMajor: (data) => {
    return new APIRequest(POST, 'profile/degree/major/', data);
  },
  modifyMajor: (id, data) => {
    return new APIRequest(PUT, 'profile/degree/major/'.concat(id, '/'), data);
  },
  putInstitution: (data) => {
    return new APIRequest(POST, 'profile/degree/institution/', data);
  },
  fetchFilters: () => {
    return new APIRequest(GET, 'posting/filter/');
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
  resetPassword: (email) => {
    return new APIRequest(POST,'account/password/reset/', {email: email});
  },
  confirmPasswordReset: (uid, token, newPassword) => {
    return new APIRequest(POST,'account/password/reset/confirm/', {uid: uid, token: token, new_password: newPassword});
  },

  // Connections and messages
  fetchConnections: () => {
    return new APIRequest(GET, 'connection/companies/');
  },
  fetchConnection: (id) => {
    return new APIRequest(GET, 'connection/companies/'.concat(id, '/'));
  },
  putConnection: (data) => {
    return new APIRequest(POST, 'connection/companies/', data);
  },
  deleteConnection: (id) => {
    return new APIRequest(DELETE, 'connection/companies/'.concat(id, '/'));
  },
  putMessage: (data) => {
    return new APIRequest(POST, 'connection/message/', data);
  },
  fetchUnconnected: () => {
    return new APIRequest(GET, 'connection/companies/');
  },

  // Terms and consents
  fetchTerms: () => {
    return new APIRequest(GET, 'consent/term/');
  },
  fetchConsents: () => {
    return new APIRequest(GET, 'consent/consent/');
  },
  putConsent: (data) => {
    return new APIRequest(POST, 'consent/consent/', {term: data});
  },
  modifyConsent: (id, data) => {
    return new APIRequest(PUT, 'consent/consent/'.concat(id, '/'), data);
  },
};
