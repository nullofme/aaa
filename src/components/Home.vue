<template>
  <div class="Home">
    <Header>首页</Header>
    <div class="container">
      <div class="spinner" v-if='loading'>
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
      <div v-else>
        <Swiper :swiperSlides="slides"></Swiper>
        <h4>热门推荐</h4>
        <ul class="list">
          <router-link :to="{name:'detail',params:{id:item.id}}" v-for="(item,index) in products" :key="index" tag='li'>
            <img :src="item.imgUrl">
            <p class="title">{{item.title}}</p>
            <p class="price">{{item.price}}</p>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../base/Header.vue";
import Swiper from "../base/Swiper.vue";
import { slides, products } from "../api";
export default {
  data() {
    return { msg: 1, slides: [], products: [], loading: true };
  },
  components: { Header, Swiper },
  methods: {
    getData() {
      setTimeout(() => {
        this.slides = slides;
        this.products = products.reverse();
        this.loading = false;
      }, 500);
    }
  },
  created() {
    this.getData()
  },
};
</script>
<style scoped='false'>
h4 {
  margin: 10px;
}
.list {
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
}
li {
  width: 50%;
  padding: 10px 20px 0 0;
  box-sizing: border-box;
  overflow: hidden;
}
li img {
  width: 100%;
}
.title {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.price {
  color: pink;
}
.spinner {
  margin: 100px auto;
  width: 90px;
  height: 90px;
  position: relative;
  text-align: center;

  -webkit-animation: rotate 2s infinite linear;
  animation: rotate 2s infinite linear;
}

.dot1,
.dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #67cf22;
  border-radius: 100%;

  -webkit-animation: bounce 2s infinite ease-in-out;
  animation: bounce 2s infinite ease-in-out;
}

.dot2 {
  top: auto;
  bottom: 0px;
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>

