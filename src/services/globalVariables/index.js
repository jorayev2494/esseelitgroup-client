// import axios from '@/services/';
// import ws from './webSocket/index.js';
var _ = require('lodash');
import Tr from '@/services/translations/translation.js';

const services = {
    install(Vue) {
        Vue.config.globalProperties.$_ = _;
        Vue.config.globalProperties.$app = {
            getNodeEnv: () => process.env.NODE_ENV,
            isLocal: process.env.NODE_ENV === 'local',
            isDevelop: process.env.NODE_ENV === 'development',
            isProduction: process.env.NODE_ENV === 'production',
            isNodeEnv: mode => process.env.NODE_ENV === mode,
        };
        // Vue.config.globalProperties.$axios = window.axios = axios;
        // Vue.config.globalProperties.$ws = window.ws = ws;
        Vue.config.globalProperties.$tMakeRoute = Tr.route;

        Vue.config.globalProperties.$clientSupportedLocales = [
            'en',
            'ru',
            'tm',
            'tr',
        ];
        
        Vue.config.globalProperties.$ckeditor = {            
            replaceStyles: content => {
                const styleReplaces = [
                    {
                      from: '<a href="',
                      to: '<a class="link-success text-decoration-none" target="_blank" href="',
                    },
                ]
                
                styleReplaces.forEach(({ from, to }) => {
                  content = content.replaceAll(from, to);
                });
            
                return content;
            }
        }
    }
};

export default services;
