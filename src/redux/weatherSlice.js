import { createSlice } from '@reduxjs/toolkit';
import { saveCityName } from '../utils/selcteCity';
import { CITIES } from '../constants';

const initialState = {
  cityNames: [],
  cities: [],
  // loading: false,
  selectCityName: '',
  currentCity: null,
  hourlyWeather: null,
};
export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addToLocalStorage: (state, action) => {
      const cities = localStorage.getItem(CITIES);
      const parsedCities = cities ? JSON.parse(cities) : [];

      const addToArrayCities = () => {
        parsedCities.push(action.payload);
        localStorage.setItem(CITIES, JSON.stringify(parsedCities));
      };

      parsedCities
        ? addToArrayCities()
        : localStorage.setItem(CITIES, JSON.stringify(action.payload));
    },
    getWeather: (state, action) => {
      // state.loading = true;
      state.cities.push(action.payload);
    },
    deleteCity: (state, action) => {
      const cities = localStorage.getItem(CITIES);
      const parsedCities = cities ? JSON.parse(cities) : [];
      const newCities = parsedCities.filter(
        name => name !== action.payload.name
      );
      localStorage.setItem(CITIES, JSON.stringify(newCities));

      state.cities = state.cities.filter(city => city.id !== action.payload.id);
    },
    updateWeather: (state, action) => {
      state.cities = state.cities.map(city =>
        city.id === action.payload.id ? action.payload : city
      );
    },
    getSelectCityName: (state, action) => {
      state.selectCityName = action.payload;
      saveCityName(action.payload);
    },
    getCurrentCity: (state, action) => {
      state.currentCity = action.payload;
    },
    resetCities: state => {
      state.cities = [];
      state.currentCity = null;
    },
    hourlyWeather: (state, action) => {
      state.hourlyWeather = action.payload;
    },
  },
});

export const {
  addToLocalStorage,
  getWeather,
  deleteCity,
  updateWeather,
  getSelectCityName,
  getCurrentCity,
  resetCities,
  hourlyWeather,
} = weatherSlice.actions;
