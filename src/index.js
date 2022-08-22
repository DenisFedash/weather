import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <BrowserRouter basename="/weather/"></BrowserRouter>

  <Provider store={store}>
    <App />
  </Provider>
);
