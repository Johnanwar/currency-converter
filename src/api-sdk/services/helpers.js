/* eslint-disable dot-notation */
import axios from 'axios';

class HttpHelpers {
  constructor() {
    this.subscribers = [];
  }

  setBaseUrl(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl;
    this.defaultdAxios = axios.create({ baseURL: this.apiBaseUrl });
    this.defaultInterceptor();
  }

  defaultInterceptor() {
    this.defaultdAxios.interceptors.request.use(
      async (config) => {
        config.headers.apikey = '9g8P5FruOdeIxkOnNzM0vOUl0PkkJbXz';
        return config;
      },
      (error) => Promise.reject(error),
    );
  }
}

export default new HttpHelpers();
