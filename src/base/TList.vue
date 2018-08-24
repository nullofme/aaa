<template>
    <div>
        <ul class="list">
            <li v-for="(item,index) in products" :key="index">
                <img :src="item.imgUrl">
                <p class="title">{{item.title}}</p>
                <p class="price">{{item.price}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
        data() {
            return {msg: 1}
        },
    props:{
        products:['products']
    }
}
</script>

