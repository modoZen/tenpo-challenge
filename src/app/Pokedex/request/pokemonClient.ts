import axios, { InternalAxiosRequestConfig } from 'axios';

export const pokeClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

pokeClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token');

  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
