<template>
  <div>
    <p :key="i" v-for="(item, i) in this.$store.state.jobs">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }}, {{ item.domain }}</small>
    </p>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  setup() {},
  created() {
    this.$store.dispatch('FETCH_JOBS')
  },
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
