<template>
    <div class="zuhejisuanshuxing">
        <hr>
        <h3>组合式--计算属性</h3>
        <p>{{ message }}</p>
        <p>{{ userInfo.name }}</p>
        <p>{{ reverseMessage }}</p>
        <p>{{ reverseUserInfoName }}</p>
        <p>{{ demo }}</p>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { myDemo } from '../Utils/computedUtils'

const message = ref('adadsadsad')

const userInfo = reactive({
    name: '张三',
    age: 18,
    sex: '男'
})

// 注意：在逻辑里读取 ref 时，必须通过 .value 才能拿到值
const reverseMessage = computed(() => {
    return message.value.split('').reverse().join('')
})

const reverseUserInfoName = computed(() => {
    return userInfo.name.split('').reverse().join('')
})

const demo = myDemo(message)
</script>

<style scoped>
.zuhejisuanshuxing {
    color: red;
}
</style>