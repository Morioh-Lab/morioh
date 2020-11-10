import axios from "axios";
// import Vue from "vue";
import store from 'store';
import config from '../config';

var session = store.get('session');

const API = axios.create({
  baseURL: config.BASE_API_URL,
  crossDomain: true,
  withCredentials: true,
  headers: { 'Authorization': session ? session.token : '' }
});

// Vue.axios = API;

API.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error

  // if (error.response.status === 401) {
  //   store.remove('session');
  //   window.location.reload();
  // }

  if (error.response.status === 403) {
    window.location.reload();
  }


  return error;
});


export default {
  put(url, data) {
    return API.put(url, data);
  },
  get(url, data) {
    return API.get(url, data);
  },
  post(url, data) {
    return API.post(url, data);
  },
  delete(url, data) {
    return API.delete(url, data);
  }
};



