import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import {Row,Button} from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(Row);
// Vue.use(Button);
// Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
