// Constants used in the module
const env = process.env;

const API_URL = env.REACT_APP_API_URL || 'https://api.recrut.no/';

export const API = API_URL;
export const BASE = API + 'v1/';
export const FORMAT = '?format=json';
export const NO_AUTH = 'NO_AUTH';
