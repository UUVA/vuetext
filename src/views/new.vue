<template>
    <div class="new-container">
        <h1>NEW新组建集合11.13</h1>
        <nav class="navigation">
            <router-link to="/" class="nav-link">返回首页</router-link>
        </nav>
        <hr>
        <zuheshijianchuli></zuheshijianchuli>
        <zuhezhentingqi></zuhezhentingqi>
        <zuhexiangyingshi></zuhexiangyingshi>
        <zuhejisuanshuxing></zuhejisuanshuxing>
        <zuhemobanyingyong></zuhemobanyingyong>
        <zuheshengmingzhouqi></zuheshengmingzhouqi>
    </div>
</template>

<script>
import zuheshijianchuli from "../newcomponents/zuheshijianchuli.vue";
import zuhezhentingqi from "../newcomponents/zuheshizhentingqi.vue";
import zuhexiangyingshi from "../newcomponents/zuhexiangyingshi.vue";
import zuhejisuanshuxing from "../newcomponents/zuhejisuanshuxing.vue";
import zuhemobanyingyong from "../newcomponents/zuhemobanyingyong.vue";
import zuheshengmingzhouqi from "../newcomponents/zuheshengmingzhouqi.vue";


export default {
    name: "New",
    data() {
        return {
            showContent: false,
        };
    },
    components: {
        zuheshijianchuli,
        zuhezhentingqi,
        zuhexiangyingshi,
        zuhejisuanshuxing,
        zuhemobanyingyong,
        zuheshengmingzhouqi,
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