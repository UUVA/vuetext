<template>
    <div class="new-container">
        <h1>NEW新组建集合11.13</h1>
        <nav class="navigation">
            <router-link to="/" class="nav-link">返回首页</router-link>
        </nav>
        <hr>
        <Zuheshijianchuli></Zuheshijianchuli>
        <Zuhezhentingqi></Zuhezhentingqi>
        <Zuhexiangyingshi></Zuhexiangyingshi>
        <Zuhejisuanshuxing></Zuhejisuanshuxing>
        <Zuhemobanyingyong></Zuhemobanyingyong>
        <Zuheshengmingzhouqi></Zuheshengmingzhouqi>
        <ZuheProps></ZuheProps>
        <Usepinia></Usepinia>
    </div>
</template>

<script>
import Zuheshijianchuli from "../newcomponents/zuheshijianchuli.vue";
import Zuhezhentingqi from "../newcomponents/zuheshizhentingqi.vue";
import Zuhexiangyingshi from "../newcomponents/zuhexiangyingshi.vue";
import Zuhejisuanshuxing from "../newcomponents/zuhejisuanshuxing.vue";
import Zuhemobanyingyong from "../newcomponents/zuhemobanyingyong.vue";
import Zuheshengmingzhouqi from "../newcomponents/zuheshengmingzhouqi.vue";
import ZuheProps from "../newcomponents/zuheProps.vue";
import Usepinia from "../newcomponents/usepinia.vue";

export default {
    name: "New",
    data() {
        return {
            showContent: false,
        };
    },
    components: {
        Zuheshijianchuli,
        Zuhezhentingqi,
        Zuhexiangyingshi,
        Zuhejisuanshuxing,
        Zuhemobanyingyong,
        Zuheshengmingzhouqi,
        ZuheProps,
        Usepinia,
    },
    mounted() {
        setTimeout(() => {
            this.showContent = true;
        }, 0);
    },
};
</script>

<style scoped>
.new-container {
    position: relative;
    z-index: 10;
}

h1 {
    z-index: 11;
    color: aqua;
}

.navigation {
    margin: 20px 0;
    z-index: 11;
}

.nav-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.nav-link:hover {
    background-color: rgba(255, 255, 255, 0.3);
}
</style>