<template>
  <div id="app">
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>
<script>
import Tab from './base/Tab.vue'
export default {
  name: 'app',
  components: {Tab}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.container{
 position: absolute;
 width: 100%;
 left: 0;
 top: 55px;
 bottom: 60px;
 overflow-y: scroll;
}
ul, li{
  list-style: none;
}
</style>
