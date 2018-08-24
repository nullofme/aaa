<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
        //swiperSlides: [1, 2, 3, 4, 5]
      }
    },
    props:['swiperSlides'],
    mounted() {

    }
  }
</script>
<style scoped>
  img{
    width: 100%;
  }
</style>
