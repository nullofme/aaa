import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router);
//代码分割  防止进入加载所有的app.js,切换路由加载对应的js

// import Home from '../components/Home.vue';
// import List from '../components/List.vue';
// import Collect from '../components/Collect.vue';
// import Add from '../components/Add.vue';
// import Detail from '../components/Detail.vue'
export default new Router({
  mode:'history',//默认是hash
  routes: [
    {path:'/home',component:()=>import('../components/Home.vue'),meta:{title:'首页'}},//是否走缓存
    {path:'/list',component:()=>import('../components/List.vue'),meta:{keepAlive:true,title:'列表页'}},
    {path:'/collect',component:()=>import('../components/Collect.vue'),meta:{title:'收藏'}},
    {path:'/add',component:()=>import('../components/Add.vue'),meta:{title:'添加'}},
    {path:'/detail/:id',component:()=>import('../components/Detail.vue'),name:'detail',meta:{title:'详情页'}},
    {path:'*',redirect:'/home'}
    // {path:'/home',component:Home},//是否走缓存
    // {path:'/list',component:List,meta:{keepAlive:true}},
    // {path:'/collect',component:Collect},
    // {path:'/add',component:Add},
    // {path:'/detail/:id',component:Detail,name:'detail'},
    // {path:'*',redirect:'/home'}
  ]
})
