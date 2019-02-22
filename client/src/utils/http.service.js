import axios from 'axios';

class HttpService {
  constructor() {
    window.onerror = (message, file, line) => {
      console.log(message, file, line); // eslint-disable-line no-console
    };
  }

  get(url, options) {
    return axios
      .get(url, options)
      .then(response => response)
      .catch(error => Promise.reject(error));
  }

  post(url, data) {
    return axios
      .post(url, data)
      .then(response => response)
      .catch(error => Promise.reject(error));
  }

  put(url, data) {
    return axios
      .put(url, data)
      .then(response => response)
      .catch(error => Promise.reject(error));
  }

  patch(url, data) {
    return axios
      .patch(url, data)
      .then(response => response)
      .catch(error => Promise.reject(error));
  }

  delete(url) {
    return axios
      .delete(url)
      .then(response => response)
      .catch(error => Promise.reject(error));
  }

  create(options) {
    return axios.create(options);
  }
}

export default new HttpService();
