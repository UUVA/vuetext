<template>
    <div class="yilaizhuruchild">
        <h3>依赖注入子组件</h3>
        <p>我从父组件收到的财产是：{{ fugin }}</p>
        <yilaizhurusun :title="fugin"></yilaizhurusun>
    </div>
</template>

<script>
import yilaizhurusun from '../pages/yilaizhurusun.vue';
export default {
    name: "yilaizhuruchild",
    data() {
        return {
            msgggggg: "english"

        }
    },
    components: {
        yilaizhurusun,
    },
    props: {
        type: String,
        default: "1000000"
    }
}
</script>

<style scoped>
.yilaizhuruchild {
    color: yellow;
}
</style>