<template>
  <div>
    <transition-group name="list" tag="ul">
      <li :key="i" v-for="(todoItem, i) in propsdata" class="shadow">
        <i
          class="fa-solid fa-check checkBtn"
          :class="{ checkBtnCompleted: todoItem.completed }"
          @click="toggleComplete(todoItem, i)"
        ></i>
        <span :class="{ textCompleted: todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="removeBtn" @click="removeTodo(todoItem, i)"
          ><i class="fa-solid fa-trash"></i
        ></span>
      </li>
    </transition-group>
  </div>
</template>
<script>
export default {
  props: ["propsdata"],
  components: {},
  data() {
    return {};
  },
  setup() {},

  mounted() {},
  unmounted() {},
  methods: {
    removeTodo(todoItem, i) {
      this.$emit("removeItem", todoItem, i);
    },
    toggleComplete(todoItem, i) {
      this.$emit("toggleItem", todoItem, i);
    },
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* 리스트 아이템 트렌지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
