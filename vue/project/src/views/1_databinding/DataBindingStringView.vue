<template>
    <div>
        <h1>Hello {{ userName }}</h1>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: "hyewon",
            message: "hello",
            arr: [],
            abj: {}
        }
    }
}
</script>

<style scoped>

</style>