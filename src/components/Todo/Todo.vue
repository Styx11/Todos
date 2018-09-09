<template>
  <div class="todo">
    <todo-input @addTodo="alert($event)"></todo-input>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue'
export default {
  name: "Todo",
  components: {
    TodoInput
  },
  data: function () {
    return {
      todo: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  .todos
    z-index 91
    position relative
    margin 0 auto
    text-align center
    top 10rem
    width 40rem
</style>
