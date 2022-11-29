import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://apptesting.docsumo.com/api/v1/eevee/',
  timeout: 25000,
});

export const post = (endpoint, data, config) => {
  return axiosClient.post(endpoint, data, config);
};
