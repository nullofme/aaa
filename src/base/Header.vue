<template>
    <div class="Header">
      <i v-if="back" class="iconfont icon-fanhui" @click="goBack()"></i>
      <slot></slot>
    </div>
</template>
<script>
    export default {
        data() {
            return {msg: 1}
        },
        props:{
          back:{
            type:Boolean,
            default:false
          }
        },
        methods:{
          goBack(){
            this.$router.go(-1)
          }
        }
    }
</script>
<style scoped>
  .Header{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
    width: 100%;
    height: 55px;
    background: #8b8;
    line-height: 55px;
    text-align: center;
    color: #fff;
  }
  .iconfont{
    position: absolute;
    left: 20px;
  }
</style>
