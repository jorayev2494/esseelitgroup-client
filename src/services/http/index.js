import axios from "axios";
import request from './interceptors/request'
import response from './interceptors/response';

// const baseURL = window.location.origin + '/api/admin';

const getBackendAddress = () => {
  const addresses = {
    local: 'http://127.0.0.1:8088',
    develop: 'http://212.24.101.35:8088',
    development: 'http://212.24.101.35:8088',
    production: 'http://127.0.0.1:8088',
  }

  return addresses[process.env.NODE_ENV] ?? addresses['local']
}

const addresses = {
  local: 'http://127.0.0.1:8088',
  develop: 'http://212.24.101.35:8088',
  development: 'http://212.24.101.35:8088',
  production: 'http://31.131.17.136:8088',
}

// return addresses[process.env.NODE_ENV] ?? addresses['local']

// const backendAddress = getBackendAddress();
const backendAddress = addresses[process.env.NODE_ENV] ?? addresses['local'];
const baseURL = `${backendAddress}/api`;

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
