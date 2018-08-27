<template>
  <div class="container">
    <ul class="temp_list">
      <router-link v-for="(item,index) in data" :key="index" tag='li' 
      :to='{name:"detail",params:{id:item.id}}'>
        <img :src="item.imgUrl">
        <div>
          <p class="title">{{item.title}}</p>
          <p class="price">{{item.price}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return { msg: 1 };
  },
  props:  ["data"],
  methods: {}
};
</script>
<style>
ul{
  width: 100%
}
.temp_list {
  padding-right: 10px;
}
.temp_list img {
  padding: 0 10px;
  width: 100px;
  height: 100px;
}
.temp_list li {
  display: flex;
}
.temp_list .title {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
