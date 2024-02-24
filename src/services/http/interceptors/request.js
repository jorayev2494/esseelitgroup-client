import { DeviceUUID } from 'device-uuid';
import store from '../../store/index.js';
import Tr from '@/services/translations/translation.js';

const makeDeviceIdHash = () => {
  const deviceUUID = (new DeviceUUID()).parse();

  const info = [
    deviceUUID.language,
    deviceUUID.platform,
    deviceUUID.os,
    deviceUUID.cpuCores,
  ];

  return deviceUUID.hashMD5(info.join(':'));
}

const request = config => {
  let accessToken = window.localStorage.getItem('access_token') && store.getters['auth/getAccessToken'];
  window.console.log(`Interceptor (request)  => { method: ${config.method}, url: ${config.url} }: `);
    
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  // request.headers['X-Socket-Id'] = Echo.socketId()
  config.headers['X-Device-Id'] = makeDeviceIdHash();
  config.headers['Accept-Language'] = Tr.getUserLocale().localeNoRegion;
  // config.headers['Content-Type'] = 'application/json';

  // const locale = store.getters['lang/locale']
  // if (locale) {
  //   request.headers.common['Accept-Language'] = locale
  // }  

  return config;
}

const requestError = error => {
    return Promise.reject(error);
}

export default {
  request,
  requestError,
};