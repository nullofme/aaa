<template>
  <div class="Detail">
    <Header :back='true'>详情页</Header>
    <div class="container pageAll">
      <img :src="data.imgUrl" alt="">
      <h4>{{data.title}}</h4>
      <p>{{data.price}}</p>
      <div>商品id：{{data.id}}</div>
      <div class="collect" @click="collect">
        <i v-if='data.isCollected' class="iconfont icon-star"></i>
        <i v-else class="iconfont icon-shoucang1"></i>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../base/Header.vue";
import { products,collects } from "../api";
export default {
  data() {
    return { data: {} };
  },
  components: { Header },
  methods: {
    getData() {
      var id = parseInt(this.$route.params.id);
      this.data = products.filter(item => {
        return item.id == id;
      })[0];
      console.log(this.data);
    },
    collect(){
      this.data.isCollected=!this.data.isCollected;
      if(this.data.isCollected){
collects.unshift(this.data)
      }else{
     collects.filter(item=>{
         return item.id!=this.data.id
       })
      }
      
    }
  },
  created() {
    this.getData();
  },
  watch: {
    //监听路径变化，请求数据
    $route() {
      this.getData();
    }
  }
};
</script>
<style scoped='false'>
.pageAll {
  position: absolute;
  top: 55px;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 8;
}
img {
  width: 100%;
  height: auto;
}
.collect i {
  display: block;
  font-size: 30px;
  text-align: right;
}
p {
  color: red;
}
</style>

