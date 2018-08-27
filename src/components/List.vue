<template>
    <div>
        <Header>列表</Header>
        <Products :data='products'></Products>
    </div>
</template>
<script>
import Header from "../base/Header.vue";
import Products from '../base/Products';
import { products, slides } from "../api";
export default {
  data() {
    return { msg: 1, products: []};
  },
  components: { Header,Products },
  created() {
   setTimeout(()=>{
        this.products=products;
   },1000)
  }
};
</script>
<style >

</style>
