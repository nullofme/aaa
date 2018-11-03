// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

//懒加载插件

import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535431765198&di=904768ec9857d46b848db4b9ddbbfb1b&imgtype=0&src=http%3A%2F%2Fcdn2.freepik.com%2Fimage%2Fth%2F318-10733.jpg',
  loading: './assets/1.gif',
  attempt: 1
})
//每步路由都会走的方法、
router.beforeEach(function(to,from,next){
  if(to.path=='/list'){
    next();
    //next({path:'/add'});//进行路由跳转/可以在此处'重定向'
  }else{
    document.title=to.meta.title;
    next();//进行路由跳转
  }
  
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
