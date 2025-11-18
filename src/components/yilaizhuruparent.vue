<template>
    <div class="yilaizhuruparent">
        <h3>依赖组件父组件</h3>
        <p>{{ msg }}</p>
        <Yilaizhuruchild :fuqin="父亲的财产"></Yilaizhuruchild>
    </div>
</template>

<script>
import Yilaizhuruchild from "../pages/yilaizhuruchild.vue";
export default {
    name: "27yilaizhuruparent",
    data() {
        return {
            msg: "父组件"
        }
    },
    components: {
        Yilaizhuruchild,
    },

    provide() {
        return {
            mess2:this.msg
        }
    }
}
</script>

<style scoped></style>