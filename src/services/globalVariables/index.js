// import axios from '@/services/';
// import ws from './webSocket/index.js';
import Tr from '@/services/translations/translation.js';

const services = {
    install(Vue) {
        // Vue.config.globalProperties.$axios = window.axios = axios;
        // Vue.config.globalProperties.$ws = window.ws = ws;
        Vue.config.globalProperties.$tMakeRoute = Tr.route;

        console.log('global service: ', Vue)
        
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
