<template>
  <div id="Tab">
    <router-link  to="/home"><i class="iconfont icon-shouye">首页</i></router-link>
    <router-link  to="/list"><i class="iconfont icon-liebiao">列表</i></router-link>
    <router-link  to="/collect"><i class="iconfont icon-star">收藏</i></router-link>
    <router-link  to="/add"><i class="iconfont icon-tianjia">添加</i></router-link>
    <router-link  to="/address"><i class="iconfont icon-dizhi">地址</i></router-link>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
  #Tab{
    width: 100%;
    display: flex;
    background: #eee;
    height:60px;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  .iconfont{
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
  a{
    text-decoration: none;
    display: block;
    width: 25%;
  }
  .router-link-active i{
    color: gold;
  }
</style>
