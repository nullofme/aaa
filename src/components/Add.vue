<template>
  <div class="Add">
    <Header>添加</Header>
    <div class="container">
      <ul>
        <li>
          <label for="title">标题</label>
          <input type="text" v-model="title">
        </li>
        <li>
          <label for="title">价格</label>
          <input type="number" v-model="price">
        </li>
        <li>
          <label for="title">封面地址</label>
          <input type="text" v-model="imgUrl">
        </li>
      </ul>
      <button @click="comfirm">确定</button>
    </div>
  </div>
</template>
<script>
import Header from "../base/Header.vue";
import { products } from "../api";
export default {
  data() {
    return { msg: 1, title: "", price: "", imgUrl: "" };
  },
  components: {
    Header
  },
  methods: {
    comfirm() {
      var id=products.length>0?products.length+1:1;
      var obj = {
        imgUrl:this.imgUrl,
        title: this.title,
        price: this.price,
        id,
        isCollected: false
      };
      products.unshift(obj);
      this.$router.push('/list')
    }
  }
};
</script>
<style scoped='false'>
ul {
  padding: 20px;
}
li {
  height: 70px;
  display: flex;
  flex-direction: column;
}
input {
  width: 90%;
  height: 30px;
}
button {
  display: block;
  outline: none;
  width: 100px;
  height: 40px;
  background: green;
  margin: 30px auto;
  color: #fff;
  border: none;
}
</style>

