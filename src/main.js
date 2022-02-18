import Vue from 'vue'
Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 全局样式
import '@/test/assets/global.css';

import App from './App.vue'

new Vue({
    render: h => h(App),
}).$mount('#app')
