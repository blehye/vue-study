<template>
  <div>
    <div :style="style1">스타일 바인딩 : 글씨는 레드, 폰크 크기는 30px</div>
    <button @click="style1.color = 'purple'">색상 바꾸기</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      style1: {
        color: 'red',
        fontSize: '30px'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
