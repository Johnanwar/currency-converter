import React from 'react';
import ReactDOM from 'react-dom';
import LocaleService from './api-sdk/locale-service';
import StorageService from './api-sdk/storage-service';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LocalStorageProvider from './localStorageProvider';
import LocaleResolver from './localeResolver';
import './assets/scss/main.scss';
import './i18n';

StorageService.setStorageProvider(LocalStorageProvider);
LocaleService.setLocaleResolver(LocaleResolver);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
