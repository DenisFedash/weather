import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import {
  addToLocalStorage,
  getCurrentCity,
  getWeather,
  hourlyWeather,
  updateWeather,
} from './weatherSlice';

export const fetchHourlyWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ lat, lon }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get('/forecast', {
        params: {
          hourly: 'hourly',
          lat,
          lon,
        },
      });

      return dispatch(hourlyWeather(data));
    } catch (error) {
      toast.error('City is not find!');
    }
  }
);

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get('/weather', {
        params: {
          q: city,
        },
      });
      dispatch(getWeather(data));
    } catch (error) {
      toast.error('City is not find!');
    }
  }
);

export const searchCity = createAsyncThunk(
  'weather/searchCity',
  async (city, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get('/weather', {
        params: {
          q: city,
        },
      });
      dispatch(getWeather(data));
      dispatch(addToLocalStorage(data.name));
    } catch (error) {
      toast.error('City is not find!');
    }
  }
);

export const updateWeatherAction = createAsyncThunk(
  'weather/updateWeather',
  async (city, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get('/weather', {
        params: {
          q: city,
        },
      });
      dispatch(updateWeather(data));
    } catch (error) {
      toast.error('City is not find!');
    }
  }
);

export const getCurrentCityAction = createAsyncThunk(
  'weather/getCurrentCity',
  async (city, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get('/weather', {
        params: {
          q: city,
        },
      });

      return dispatch(getCurrentCity(data));
    } catch (error) {
      toast.error('City is not find!');
    }
  }
);
