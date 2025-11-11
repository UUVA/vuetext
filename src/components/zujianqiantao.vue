<template>
    <div class="zujianqiantao">
        <h3>组件嵌套</h3>
        <Header></Header>
        <Main></Main>
        <Aside></Aside>
    </div>
</template>

<script>
import header from '../pages/header.vue';
import Main from '../pages/main.vue';
import Aside from '../pages/aside.vue'
;
import Header from '../pages/header.vue';
export default {
    name: 'zujiantiantao',
    data() {
        return {
            name: '张三'
        }
    },
    components: {
        Header,
        Main,
        Aside,
    }
}
</script>

<style scoped>
.zujiantiantao {
    color: red;
    position: relative;
}
</style>