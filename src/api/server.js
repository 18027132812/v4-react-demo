/**
 * @author v4 <lucky6616888@163.com>
 */
import axios from 'axios';

axios.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  return response;
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 202:
        console.log(202);
        break;
      case 302:
        console.log(302);
        break;
      case 404:
        console.log(404);
        break;
      case 500:
        console.log(500);
        break;
      default:
        console.log('default');
    }
  }
  return Promise.resolve(error.response);
});

function checkStatus(response) {
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    if (response.data.code === 400) {
      console.log(response.data.stack);
    }
    return response.data;
  } else {
    let obj = null;
    if (response.status === 202) {
      obj = null;
    } else {
      obj = {
        status: -404,
        desc: '网络异常'
      }
    }
    return obj;
  }
}

export function post(data) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      baseURL: '',
      url: data.url,
      data: data.params,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest'
      },
      withCredentials: true,
      timeout: 100000
    }).then(response => {
      let data = checkStatus(response);
      if (data.code === 100 || data.code === 200) {
        resolve(data);
      } else {
        reject(data);
      }
    }).catch(error => {
      reject(error);
    })
  });
}
