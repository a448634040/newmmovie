import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/iconfont/iconfont.css'
import './assets/css/common.css'
import Axios from 'axios'

Vue.prototype.Axios = Axios;
Vue.filter('setWH', (url, arg) => {
    return url.replace(/w\.h/, arg)
})

Vue.config.productionTip = false
//引入better-scroll全局组件
import Scroller from '@/components/Scroller'
Vue.component('Scroller',Scroller);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})