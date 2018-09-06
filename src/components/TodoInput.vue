<template>
  <div class="todos">
    <input
      class="todo-input"
      type="text"
      v-model="todo"
      @keyup.enter="addTodo"
      placeholder="What needs to be done?"
    >
    <div class="todo">
      <transition-group
        tag="div"
        name="custom-classes-transition"
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
      >
      <div
        class="todo-content animated fadeInDown"
        v-for="(item, index) in todos"
        :key="index"
        @mouseover="item.show = true"
        @mouseout="item.show = false"
      >
        {{index + 1}}. {{item.todo}}
        <span class="iconfont close" v-show="item.show" @click="todoDel">&#xe731;</span>
      </div>
      </transition-group>
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
      if (this.todo) {
        this.todos.push({id: this.id++, todo: this.todo, show: false})
        this.todo = ''
      }
    },
    todoDel: function () {
      let todoList = []
      this.todos.forEach(function (item) {
        if (!item.show) {
          todoList.push(item)
        }
      })
      this.todos = todoList
    }
  },
  watch: {
    todos: function () {
      if (localStorage) {
        let todoStr = JSON.stringify(this.todos)
        localStorage.setItem('todos', todoStr)
      }
    }
  },
  mounted: function () {
    if (localStorage.getItem('todos')) {
      let todoList = localStorage.getItem('todos')
      this.todos = JSON.parse(todoList)
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
    width 40rem
    .todo-input
      display inline-block
      line-height 3.5rem
      width 100%
      padding 0 1rem
      font-size 2rem
      color #515a6e
      box-shadow:4px 4px 10px #ccc
      border 0px solid #fff
      border-bottom 1px solid #ccc
      border-radius .3rem
      outline none
    .todo
      position relative
      .todo-content
        position relative
        display inline-block
        width 100%
        line-height 3.5rem
        padding 0 1rem
        margin 0 0
        font-size 2rem
        text-align left
        color #515a6e
        background-color #fff
        .close
          cursor pointer
          position absolute
          top 0
          right 1rem
          font-size 1.5rem
          color rgb(179, 179, 179)
</style>
