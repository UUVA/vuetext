<template>
    <div class="watchzhengting">
        <hr>
        <h3>watch监听</h3>
        <p>
            {{ message }}
        </p>
        <button @click="update">修改数据</button>
    </div>
</template>

<script>
export default {
    name: 'watchzhengting',
    data() {
        return {
            message: 'watchzhenting'
        }
    },
    methods: {
        update() {
            this.message = 'update修改后的数据'
        }
    },
    watch: {
        // watch里面的函数名称必须与data中的属性名称相同，newValue是修改前的值，这两个都是参数，是必须的
        message(newValue, oldValue) {
            //  数据发生变化，自动执行的函数
            console.log(newValue, '+++++++++++');
            console.log(oldValue, '------------');
        }
    }
}
</script>

<style scoped>
.watchzhengting {

    color: blueviolet;

}
</style>