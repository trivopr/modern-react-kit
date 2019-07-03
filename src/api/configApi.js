import axios from 'axios';

const apiRequest = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Main get function
 * @param {*} url
 */

export const get = async (url, sendToken = true) => {
  if (!sendToken) {
    const response = await apiRequest.get(url);
    return response;
  }
  const response = await apiRequest({
    method: 'get',
    url,
    headers: {
      'x-access-token': localStorage.getItem(process.env.AUTH_TOKEN),
    },
  });
  return response;
};

/**
 * Main POST method
 * @param {*} url
 * @param {*} data
 * @param {*} sendToken
 */
export const post = async (url, data, sendToken = true) => {
  if (!sendToken) {
    const response = await apiRequest.post(url, data);
    return response;
  }

  const response = await apiRequest({
    method: 'post',
    url,
    data,
    headers: {
      'x-access-token': localStorage.getItem(process.env.AUTH_TOKEN),
    },
  });
  return response;
};

/**
 * Main PUT method
 * @param {*} url
 * @param {*} data
 * @param {*} sendToken
 */
export const put = async (url, data, sendToken = true) => {
  if (!sendToken) {
    const response = await apiRequest.put(url, data);
    return response;
  }

  const response = await apiRequest({
    method: 'put',
    url,
    data,
    headers: {
      'x-access-token': localStorage.getItem(process.env.AUTH_TOKEN),
    },
  });
  return response;
};

/**
 * Main DELETE method
 * @param {*} url
 * @param {*} data
 * @param {*} sendToken
 */

export const deleteCall = async (url, data, sendToken = true) => {
  if (!sendToken) {
    const response = await apiRequest.put(url, data);
    return response;
  }

  const response = await apiRequest({
    method: 'delete',
    url,
    data,
    headers: {
      'x-access-token': localStorage.getItem(process.env.AUTH_TOKEN),
    },
  });
  return response;
};

// add axios interceptors to be able to extract the error details
apiRequest.interceptors.response.use(undefined, err => {
  const res = err.response;
  return new Promise((resolve, reject) => {
    const { data } = res;
    if (data && data.errors && data.errors.length) {
      reject({ error: data.errors[0] });
    }
    reject(err);
  });
});

export const setApiLanguage = lang => {
  apiRequest.defaults.headers.common['x-api-lang'] = lang;
};
