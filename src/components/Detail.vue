<template>
    <div class="Detail">
    <Header :back='true'>详情页</Header>  
    <div class="container pageAll">
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
.pageAll{
    position: absolute;
    top:55px;
    bottom:0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 8;
}
img{
    width: 100%;
}
p{
    color: red
}
</style>

