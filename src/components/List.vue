<template>
    <div>
      <Header>列表</Header>
      <TList :products='products'></TList>  
    </div>
</template>
<script>
  import Header from '../base/Header.vue';
  import TList from '../base/TList.vue';
  import {products} from '../api'
  console.log(products);
    export default {
        data() {
            return {msg: 1,products:[]}
        },
      components:{Header,TList},
      created(){
        this.products=products;
      }

    }
</script>
