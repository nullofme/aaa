<template>
  <div id="app">
    <!-- 走缓存的路由 -->
    <transition name='fadeIn'>
      <keep-alive>
        <router-view v-if='$route.meta.keepAlive'></router-view>
      </keep-alive>
    </transition>
    <transition name='fadeIn'>
      <!--  不走缓存的页面-->
      <router-view v-if='!$route.meta.keepAlive'></router-view>
    </transition>
    <Tab></Tab>
  </div>
</template>
<script>
import Tab from "./base/Tab.vue";
export default {
  name: "app",
  components: { Tab },
  mounted() {
   console.log(1)
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.container {
  position: absolute;
  width: 100%;
  overflow: hidden;
  left: 0;
  top: 55px;
  bottom: 60px;
  overflow-y: scroll;
}
ul,
li {
  list-style: none;
}
.fadeIn-enter {
  opacity: 0;
}
.fadeIn-enter-active {
  opacity: 1;
  transition: all 1s linear;
}
.fadeIn-leave-active {
  opacity: 0;
}
</style>
