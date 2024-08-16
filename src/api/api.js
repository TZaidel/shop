import axios from 'axios';
export const apiProduct = axios.create({
  baseURL: 'https://66bf1a1242533c4031450ec8.mockapi.io',
  withCredentials: false,
  headers: { 'content-type': 'application/json' },
  method: 'GET',
});

export const apiAuth = axios.create({
  // baseURL: 'http://176.37.226.184:8009',
  baseURL: 'https://connections-api.goit.global/',
  withCredentials: true,
});

export const setToken = token => {
  apiAuth.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  apiAuth.defaults.headers.common.Authorization = ``;
};
