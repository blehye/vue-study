<template>
  <div>
    <p :key="i" v-for="(item, i) in this.$store.state.ask">
      <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      ask: []
    }
  },
  setup() {},
  created() {
    this.$store.dispatch('FETCH_ASK')
  },
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
