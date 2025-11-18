<template>
    <div class="zuhexiangyingshi">
        <h3>组合式API--响应式</h3>
        <p>{{ msg }}</p>
        <p>{{ asas }}</p>
        <p>{{ state.ok ? 'ok1' : 'ok2' }}</p>
        <p>{{ msg.split('').reverse().join('') }}</p>
        <p>{{ state.rawHtml }}</p>
        <p v-html="state.rawHtml"></p>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// ref定义的是基本的数据类型：string number boolean
// reactive定义的是引用类型的数据类型：object array

const msg = ref('hello world')
const asas = ref(12222)

const state = reactive({
    ok: true,
    rawHtml: '<a href="https://www.baidu.com">百度</a>'
})
</script>

<style scoped>
.zuhexiangyingshi {
    color: yellow;
}
</style>