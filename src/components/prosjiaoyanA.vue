<template>
    <div class="peosjiaoyanA">
        <hr>
        <h3>props校验</h3>
        <propsjiaoyanB :title="title" :age="age" :names="names"></propsjiaoyanB>

    </div>
</template>

<script>
import propsjiaoyanB from '../pages/propsjiaoyanB.vue';
export default {
    name: 'propsjiaoyanA',
    data() {
        return {
            title: 'propsjiaoyanA',
            age: 1800,
            names:['张三','李四','王五']
        }
    },
    components: {
       propsjiaoyanB 
    }
}
</script>

<style>
.propsjiaoyanA{
    color: palevioletred;
}
</style>