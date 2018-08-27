<template>
  <div class="Collect">
    <Header>收藏</Header>
    <Products :data='collects'></Products>
  </div>
</template>
<script>
import Header from "../base/Header.vue";
import Products from "../base/Products.vue";
import { collects } from "../api";
export default {
  data() {
    return { msg: 1, collects: [] };
  },
  components: {
    Header,
    Products
  },
  created() {
     this.collects=collects;
  }
};
</script>
