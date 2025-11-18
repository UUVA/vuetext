<template>
    <div class="zuhemobanyingyong">
        <hr>
        <h3>组合式---模板引用</h3>
        <p ref="message">这是组合式模板引用的内容</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const message = ref(null)

onMounted(() => {
    // console.log(message.value, '4545454545')
    message.value.style.color = 'aqua'
    message.value.style.fontSize = '30px'
    message.value.innerHTML = '++++666665656565++'
})
</script>

<style scoped>
.zuhemobanyingyong {
    color: red;
}
</style>