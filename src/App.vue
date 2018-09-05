<template>
  <div id="app">
    <img src="./assets/logo.png">
    <back-ground></back-ground>
  </div>
</template>

<script>
import BackGround from './components/BackGround.vue'

export default {
  name: 'App',
  components: {
    BackGround: BackGround
  }
}
</script>

<style>

</style>
