<template>
  <div id="app">
    <back-ground></back-ground>
    <todo></todo>
  </div>
</template>

<script>
import BackGround from './components/BackGround.vue'
import Todo from './components/Todo.vue'
export default {
  name: 'App',
  components: {
    BackGround: BackGround,
    Todo: Todo
  }
}
</script>
