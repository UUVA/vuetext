<template>
    <div class="tiaojianxuanran">
        <hr>
        <h3>条件渲染</h3>
        <div v-if="flag">看见看见？</div>
        <div v-else>没看见</div>
        <div v-if="type === 'A'">A</div>
        <div v-else-if="type === 'B'">B</div>
        <div v-else-if="type === 'C'">C</div>
        <div v-else>D</div>
    </div>
</template>

<script>
export default {
    name: '3tiaojianxuanran',
    data() {
        return {
            flag:false,
            type: "B",
            flag1: false
        }
    },
}
</script>

<style scoped>
.tiaojianxuanran {
    color: purple;
}
</style>