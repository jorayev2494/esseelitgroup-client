// import axios from '@/services/';
// import ws from './webSocket/index.js';
import Tr from '@/services/translations/translation.js';

const services = {
    install(Vue) {
        // Vue.config.globalProperties.$axios = window.axios = axios;
        // Vue.config.globalProperties.$ws = window.ws = ws;
        Vue.config.globalProperties.$tMakeRoute = Tr.route;

        console.log('global service: ', Vue)
        
    }
};

export default services;
