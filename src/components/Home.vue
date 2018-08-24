<template>
  <div class="Home">
    <Header>首页</Header>
    <div class="container">
      <Swiper :swiperSlides="slides"></Swiper>
      <h4>热门推荐</h4>
      <ul class="list">
        <router-link :to="{name:'detail',params:{id:item.id,price:item.price,imgUrl:item.imgUrl,title:item.title}}" v-for="(item,index) in products" :key="index" tag='li'>
          <img :src="item.imgUrl">
          <p class="title">{{item.title}}</p>
          <p class="price">{{item.price}}</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from "../base/Header.vue";
import Swiper from "../base/Swiper.vue";
import { slides, products } from "../api";
export default {
  data() {
    return { msg: 1, slides, products:[] };
  },
  components: { Header, Swiper },
  created(){
     this.products=products;
  }
};
</script>
<style>
h4{
  margin: 10px ;
}
.list{
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
}
li{
  width: 50%;
  padding:10px 20px 0 0;
  box-sizing: border-box;
  overflow: hidden;
}
li img{
  width: 100%;
}
.title{
 overflow: hidden;
 display: -webkit-box;
 -webkit-line-clamp:2;
 -webkit-box-orient: vertical;
}
.price{
  color: pink
}
</style>

