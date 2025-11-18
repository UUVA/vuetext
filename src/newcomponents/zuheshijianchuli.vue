<template>
    <div class="zuheshijianchuli">
        <h3>组合式---事件处理</h3>
        <p>{{ count }}</p>
        <button @click="addCount">增加</button>
        <hr>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const addCount = (eeee) => {
    // console.log(eeee, +++++++++++++++)
    count.value++
}
</script>

<style scoped>
.zuheshijianchuli {
    color: pink;
}
</style>