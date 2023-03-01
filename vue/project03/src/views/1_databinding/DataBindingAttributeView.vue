<template>
  <div>
    <input type="text" v-bind:value="userId" readonly />
    <input type="text" :value="userId" readonly />

    <br />

    <img :src="imgSrc" alt="" style="width: 100px; height: auto" />

    <br />

    <input type="search" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'hhhhh',
      imgSrc:
        'https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg',
      txt1: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
