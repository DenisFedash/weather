import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../utils/createApi';
import { weatherSlice } from './weatherSlice';

export const api = createAPI();

const rootReducer = combineReducers({
  [weatherSlice.name]: weatherSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
