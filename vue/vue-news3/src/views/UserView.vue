<template>
  <div>
    <p>name : {{ this.$store.state.user.id }}</p>
    <p>karma : {{ this.$store.state.user.karma }}</p>
    <p>create : {{ this.$store.state.user.created }}</p>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {
    const id = this.$route.params.id
    this.$store.dispatch('FETCH_USER', id)
  },
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
