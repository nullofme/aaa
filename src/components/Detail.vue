<template>
    <div class="Detail">
    <Header :back='true'>详情页</Header>  
    <div class="container">
        <img :src="data.imgUrl" alt="">
        <h4>{{data.title}}</h4>
        <p>{{data.price}}</p>
        <div>商品id：{{data.id}}</div>
    </div>
    </div>
</template>
<script>

import Header from '../base/Header.vue';
    export default {
        data() {
            return {data:{}}
        },
        components:{Header},
        created(){
        console.log(this.$route);
        this.data=this.$route.params;
    }
    }
    
</script>
<style scoped='false'>
img{
    width: 100%;
}
p{
    color: red
}
</style>

