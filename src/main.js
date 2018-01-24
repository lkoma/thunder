import Vue from 'vue';
import 'normalize.css';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-teal.css';
import './assets/css/muse-ui.styl';
import './assets/css/base.styl';
import App from './App';
import './utils/log';
import './filters/index';
import './directives/index';
import http from './utils/http';
import router from './router';
import store from './store';

require('smoothscroll-polyfill').polyfill();

Vue.config.silent = true;
Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.performance = true;

Vue.use(MuseUI);
Vue.prototype.$http = http;

new Vue({
    el: '#app',
    render: h => h(App),
    components: { App },
    router,
    store,
    mounted() {
        console.log('App loaded, spend', +new Date() - window.appStartAt, 'ms');
    }
});
