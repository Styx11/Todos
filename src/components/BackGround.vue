<template>
  <div>
    <div class="bgImg"></div>
    <div class="bgCover"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BackGround',
  data: function () {
    return {
      bingImg: {}
    }
  },
  methods: {
    getBingImg: function () {
      axios.get('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1')
        .then(this.getBingImgSucc)
        .catch(function (error) {
          console.log(error)
        })
    },
    getBingImgSucc: function (res) {
      console.log(JSON.stringify(res))
    }
  },
  mounted: function () {
    this.getBingImg()
  }
}
</script>

<style lang="stylus" scoped>

</style>
