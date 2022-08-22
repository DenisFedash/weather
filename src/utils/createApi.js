import axios from 'axios';

export const createAPI = () => {
  return axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
      units: 'metric',
      exclude: 'hourly,daily',
      appid: '4a182782e7dbfdb97d2cf6bf9d32ed64',
    },
  });
};
