import ServerValidate from '@/services/toast/template/ServerValidate.vue';
import { toast } from 'vue3-toastify';
import ErrorHandlers from './ErrorHandlers.js'

const response = response => {
  window.console.log(`Interceptor (response)  => { method: ${response.method}, url: ${response.url} }: `, response);

  return response;
}

const responseError = error => {
  // const accessToken = localStorage.getItem('access_token');
  // const { config, response: { status } } = error
  const { config, response } = error
  // const originalRequest = config

  console.log('response.data: ', response.data);

  ErrorHandlers.forEach((item) => {
    if ((item.status && item.status === response.status) || (item.statuses && item.statuses.includes(response.status))) {
      item.handler(response);
    }
  });

  return Promise.reject(error);
};

export default {
  response,
  responseError,
};