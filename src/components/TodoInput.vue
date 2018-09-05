<template>
  <div class="todos">
    <input
      class="todo-input"
      type="text"
      v-model="todo"
      @keyup.enter="addTodo"
      placeholder="What needs to be done?"
    >
    <div
      class="todo"
      v-for="item in todos"
      :key="item.id"
    >
      <div class="todo-content">{{item.id}}. {{item.todo}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data: function () {
    return {
      id: 1,
      todo: '',
      todos: []
    }
  },
  methods: {
    addTodo: function () {
      this.todos.push({id: this.id++, todo: this.todo})
      this.todo = ''
      console.log(this.todos)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .todos
    z-index 99
    position relative
    margin 0 auto
    text-align center
    top 10rem
    .todo-input
      display inline-block
      width 40rem
      line-height 3.5rem
      padding 0 1rem
      font-size 2rem
      color #515a6e
      box-shadow:4px 4px 10px #ccc
      border 0px solid #fff
      border-bottom 1px solid #ccc
      border-radius .3rem
      outline none
    .todo-content
      display inline-block
      width 40rem
      line-height 3.5rem
      padding 0 1rem
      font-size 2rem
      text-align left
      color #515a6e
      background-color #fff
</style>
