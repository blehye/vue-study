<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
    <span class="addContainer">
      <i class="fa-solid fa-plus addBtn" @click="addTodo"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
    -->
      <h3 slot="header">
        경고!
        <i class="fa-solid fa-x closeModalBtn" @click="showModal = false"></i>
      </h3>
      <h3 slot="body">무언가을 입력하세요.</h3>
    </Modal>
  </div>
</template>
<script>
import Modal from "./common/Modal.vue";

export default {
  components: {
    Modal: Modal,
  },
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        this.$emit("addTodoItem", this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      //input값 초기화
      this.newTodoItem = "";
    },
  },
};
</script>
<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 20px;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}

.closeModalBtn {
  color: green;
}
</style>
