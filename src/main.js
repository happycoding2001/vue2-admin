import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import {Row,Button} from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './api/mock'
import Cookies from 'js-cookie';

// Vue.use(Row);
// Vue.use(Button);
// Vue.config.productionTip = false
Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
  const token = Cookies.get('token')
  if(!token && to.name!='login'){
    next({name:'login'})
  }else if(token && to.name === 'login'){
    next({name:'home'})
  }else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  
}).$mount('#app')
