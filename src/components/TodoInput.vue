<template>
  <div class="todos">
    <input
      class="todo-input"
      type="text"
      v-model="todo"
      v-on:keyup.enter="addTodo"
      placeholder="What needs to be done?"
    >
    <div class="todo">
      <transition-group
        tag="div"
        class="content"
        name="custom-classes-transition"
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
      >
      <div
        v-for="item in todos"
        v-bind:key="item.id"
        class="todo-content"
        v-on:mouseover="item.show = true"
        v-on:mouseout="item.show = false"
      >
        <span
          v-if="item.done"
          class="iconfont done animated fadeIn"
          v-on:click='item.done = false'
        >&#xe660;</span>
        <span
          v-if="item.show && !item.done"
          class="iconfont undone"
          v-on:click="item.done = true"
        >&#xe660;</span>
        <span class="content">{{item.todo}}</span>
        <span class="iconfont close" v-show="item.show" v-on:click="todoDel">&#xe731;</span>
      </div>
      </transition-group>
    </div>
    <div class="todo-footer" v-if="todos.length">
      <span class="todo-left">
        <span class="left">{{ todoItems }}</span> item(s) left
      </span>
      <span class="todo-clear" @click="todoClear">Clear Completed</span>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
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
        this.todos.push({id: this.id++, todo: this.todo, show: false, done: false})
        this.todo = ''
      }
    },
    todoDel: function () {
      let todoList = []
      this.id = 1
      this.todos.forEach((item) => {
        if (!item.show) {
          item.id = this.id++
          todoList.push(item)
        }
      })
      this.todos = todoList
    },
    todoClear: function () {
      let todoList = []
      this.id = 1
      this.todos.forEach((item) => {
        if (!item.done) {
          item.id = this.id++
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
      if (this.todos.length >= 9) {
        this.scroll.refresh()
      }
    }
  },
  computed: {
    todoItems: function () {
      let items = 0
      this.todos.forEach(function (item) {
        if (!item.done) {
          items++
        }
      })
      return items
    }
  },
  mounted: function () {
    this.scroll = new BScroll('.todo', {scrollbar: {fade: true}})
    if (localStorage.getItem('todos')) {
      let todoList = localStorage.getItem('todos')
      this.todos = JSON.parse(todoList)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .todos >>> .bscroll-vertical-scrollbar
    top 57px !important
    right -32px !important
  .todos
    z-index 91
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
      width 672px
      max-height 504px
      background-color #fff
      overflow hidden
      .todo-content
        position relative
        width 96.5%
        height 3.5rem
        line-height 3.5rem
        padding 0 .8rem
        font-size 2rem
        text-align left
        color #515a6e
        background-color #fff
        .done
          cursor pointer
          font-size 1.6rem
          color rgb(100, 200, 87)
        .undone
          cursor pointer
          font-size 1.6rem
          color rgb(179, 179, 179)
        .content
          position absolute
          top 0
          left 3rem
        .close
          cursor pointer
          position absolute
          top 0
          right 1rem
          font-size 1.5rem
          color rgb(179, 179, 179)
        .close:hover
          color #515a6e
    .todo-footer
      width 672px
      height 3rem
      margin 0 auto
      text-align center
      position relative
      background-color #fff
      color rgb(179, 179, 179)
      box-shadow:4px 4px 10px #ccc
      border-bottom-left-radius .3rem
      border-bottom-right-radius .3rem
      border-top 1px solid rgb(179, 179, 179)
      .todo-left
        position absolute
        top .8rem
        left 1rem
        .left
          color #515a6e
      .todo-clear
        cursor pointer
        position absolute
        top .8rem
        right 1rem
</style>
