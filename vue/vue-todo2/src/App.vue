<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input @addTodoItem="addOneItem"></todo-input>
    <todo-list
      :propsdata="todoItems"
      @removeItem="removeOneItem"
      @toggleItem="toggleOneItem"
    ></todo-list>
    <todo-footer @clearAll="clearAllItems"></todo-footer>
  </div>
</template>
<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter,
  },
  data() {
    return {
      todoItems: [],
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(
          JSON.parse(localStorage.getItem(localStorage.key(i)))
        );
      }
    }
  },
  methods: {
    addOneItem(todoItem) {
      var obj = { completed: false, item: todoItem };

      //로컬스토리지에 투두 저장 localStorage.setItem(키, 밸류)
      localStorage.setItem(todoItem, JSON.stringify(obj));

      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, i) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(i, 1);
    },
    toggleOneItem(todoItem, i) {
      console.log(i);
      //화면 목록에만 토글 반영됨!
      todoItem.completed = !todoItem.completed;

      //로컬스토리지에도 토글 반영해야함
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    },
  },
};
</script>
<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
