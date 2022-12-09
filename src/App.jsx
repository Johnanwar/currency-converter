/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HttpHelpers from './api-sdk/services/helpers';
import store from './api-sdk/redux/storeConfig';
import Home from './views/home';
import PublicLayout from './layout/public-latout';

HttpHelpers.setBaseUrl(process.env.REACT_APP_API_URL);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
