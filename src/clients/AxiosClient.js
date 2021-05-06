import axios from 'axios';

class AxiosClient {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  _request(method, path, config) {
    const finalConfig = config;
    finalConfig.url = path;
    finalConfig.method = method;

    return axios.request(finalConfig);
  }

  post(path, data, config = {}) {
    const localConfig = config;
    localConfig.data = data;

    return this._request('post', `${this.apiUrl}/${path}`, localConfig);
  }
}

export default AxiosClient;
