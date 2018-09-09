<template>
  <div>
    <input
      class="todo-input"
      type="text"
      v-model="todo"
      v-on:keyup.enter="addTodo"
      placeholder="What needs to be done?"
    >
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data: function () {
    return {
      todo: ''
    }
  },
  methods: {
    addTodo: function () {
      this.$emit("addTodo", this.todo)
      this.todo = ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  .todo-input
    background-color #fff
    display inline-block
    line-height 3.5rem
    width 40rem
    padding 0 1rem
    font-size 2rem
    color #515a6e
    box-shadow:0px 4px 8px #ccc
    border 0px solid #fff
    border-bottom 1px solid #ccc
    border-radius .3rem
    outline none
</style>
