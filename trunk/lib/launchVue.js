import Vue from 'vue';
import store from 'trunk/desktop/store/index';
import router from 'trunk/desktop/router/index';
import App from 'trunk/desktop/App.vue';
import axios from 'axios';

axios.defaults.timeout = 5000; //5000的超index时验证
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

Vue.config.productionTip = false;

const launchVue = function (input = {}) {

    Vue.prototype.siteConstants = typeof input.siteConstants === 'object' ? input.siteConstants : {};

    return new Vue({
        router: input.router || router,
        store: input.store || store,
        render: h => h(input.App || App),
    }).$mount('#app');

};

export default launchVue;

