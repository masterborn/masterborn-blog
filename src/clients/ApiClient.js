import globalConfig from '../../config';
import getFormData from '../utils/getFormData';

import AxiosClient from './AxiosClient';

class ApiClient extends AxiosClient {
  constructor(apiUrl = globalConfig.apiUrl) {
    super(apiUrl);
  }

  postCandidate(data) {
    const path = 'candidates';
    const formData = getFormData(data);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    return this.post(path, formData, config);
  }

  postDeal(data) {
    const path = 'leads';
    const formData = getFormData(data);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    return this.post(path, formData, config);
  }
}

export default new ApiClient();
