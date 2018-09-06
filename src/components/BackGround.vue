<template>
  <div class="bg">
    <div class="bgTitle">Todos</div>
    <div class="bgImg">
      <img src="https://bing.ioliu.cn/v1" class="bgImg" :style="{height: height + 'px'}">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BackGround',
  data: function () {
    return {
      height: 0
    }
  },
  mounted: function () {
    this.height = window.screen.availHeight + 30
  }
}
</script>

<style lang="stylus" scoped>
  .bg
    z-index 2
    position absolute
    overflow hidden
    top 0
    left 0
    right 0
    bottom 0
    background-color #fff
    opacity 0.3
    .bgTitle
      z-index 99
      position relative
      margin 0 auto
      text-align center
      color #000
      font-size 8rem
    .bgImg
      width 100%
      position absolute
      z-index 1
      top 0
      left 0
</style>
