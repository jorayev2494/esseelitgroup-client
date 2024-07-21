import axios from "axios";
import request from './interceptors/request'
import response from './interceptors/response';

const apiServerEndpoint = process.env.VUE_APP_API_SERVER_ENDPOINT;
const baseURL = `${apiServerEndpoint}/api`;

console.log('MODE process.env.NODE_ENV: ', `${process.env.NODE_ENV},`, ', baseURL: ', baseURL)

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
