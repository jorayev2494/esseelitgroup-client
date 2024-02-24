import axios from "axios";
import request from './interceptors/request'
import response from './interceptors/response';

// const baseURL = window.location.origin + '/api/admin';
const baseURL = 'http://127.0.0.1:8088/api';

const httpClient = axios.create({
  baseURL,
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
  // headers: {
  //   'X-Device-Id': MediaDeviceInfo.deviceId,
  //   'X-Socket-Id': () => window.Echo.socketId(),
  // },
});

httpClient.interceptors.request.use(request.request, request.requestError);
httpClient.interceptors.response.use(response.response, response.responseError);
  
export default httpClient;
