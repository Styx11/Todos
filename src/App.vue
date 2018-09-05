<template>
  <div id="app">
    <back-ground></back-ground>
    <todo-input></todo-input>
  </div>
</template>

<script>
import BackGround from './components/BackGround.vue'
import TodoInput from './components/TodoInput.vue'

export default {
  name: 'App',
  components: {
    BackGround: BackGround,
    TodoInput: TodoInput
  }
}
</script>

<style>

</style>
