<template>
    <div class="home-container">
        <h1>VUE教学</h1>
        <nav class="navigation">
            <router-link to="/new" class="nav-link">新组建集合</router-link>
        </nav>
        <hr>
        <Mobanyufa> </Mobanyufa>
        <Shuxingbangding></Shuxingbangding>
        <Tiaojianxuanran></Tiaojianxuanran>
        <Liebiaoxuanran></Liebiaoxuanran>
        <Keyguanlizhuangtai></Keyguanlizhuangtai>
        <Shijianchuancan></Shijianchuancan>
        <Shijianchuli></Shijianchuli>
        <Jisuanshuxing></Jisuanshuxing>
        <Watchzhenting></Watchzhenting>
        <Mobanyinyong></Mobanyinyong>
        <Zujianzucheng></Zujianzucheng>
        <Zujianqiantao></Zujianqiantao>
        <Zujianchuanzhiprops></Zujianchuanzhiprops>
        <PropsjiaoyanA></PropsjiaoyanA>
        <Zujianshijian></Zujianshijian>
        <ZujianshijianVmodel></ZujianshijianVmodel>
        <Chacaoslots></Chacaoslots>
        <Shengmingzhouqi></Shengmingzhouqi>
        <Shengmingzhouqiyingyong></Shengmingzhouqiyingyong>
        <Dongtaizujian></Dongtaizujian>
        <Yibuzujian></Yibuzujian>
        <Yilaizhuruparent></Yilaizhuruparent>
        
    </div>
</template>

<script>
import Mobanyufa from '../components/mobanyufa.vue';
import Shuxingbangding from '../components/shuxingbangding.vue';
import Tiaojianxuanran from '../components/tiaojianxuanran.vue';
import Liebiaoxuanran from '../components/liebiaoxuanran.vue';
import Keyguanlizhuangtai from '../components/keyguanlizhuangtai.vue';
import Shijianchuancan from '../components/shijianchuancan.vue';
import Shijianchuli from '../components/shijianchuli.vue';
import Jisuanshuxing from '../components/jisuanshuxing.vue';
import Watchzhenting from '../components/watchzhenting.vue';
import Classbangding from '../components/classbangding.vue';
import Shijianxiushifu from '../components/shijianxiushifu.vue';
import Shuzubianhuazhence from '../components/shuzubianhuazhence.vue';
import Stylebangding from '../components/stylebangding.vue';
import Mobanyinyong from '../components/mobanyinyong.vue';
import Zujianzucheng from '../components/zujianzucheng.vue';
import Zujianqiantao from '../components/zujianqiantao.vue';
import Zujianchuanzhiprops from '../components/zujianchuanzhiprops.vue';
import PropsjiaoyanA from '../components/prosjiaoyanA.vue';
import Zujianshijian from '../components/zujianshijian.vue';
import ZujianshijianVmodel from '../components/zujianshijianVmodel.vue';
import Chacaoslots from '../components/chacaoslots.vue';
import Shengmingzhouqi from '../components/shengmingzhouqi.vue';
import Shengmingzhouqiyingyong from '../components/shengmingzhouqiyingyong.vue';
import Dongtaizujian from '../components/dongtaizujian.vue';
import Yibuzujian from '../components/yibuzujian.vue';
import Yilaizhuruparent from '../components/yilaizhuruparent.vue';

export default {
    name: 'home',
    components: {
        Mobanyufa,
        Shuxingbangding,
        Tiaojianxuanran,
        Liebiaoxuanran,
        Keyguanlizhuangtai,
        Shijianchuancan,
        Shijianchuli,
        Shijianxiushifu,
        Jisuanshuxing,
        Classbangding,
        Shuzubianhuazhence,
        Stylebangding,
        Watchzhenting,
        Mobanyinyong,
        Zujianzucheng,
        Zujianqiantao,
        Zujianchuanzhiprops,
        PropsjiaoyanA,
        Zujianshijian,
        ZujianshijianVmodel,
        Chacaoslots,
        Shengmingzhouqi,
        Shengmingzhouqiyingyong,
        Dongtaizujian,
        Yibuzujian,
        Yilaizhuruparent,

    },
}

</script>

<style scoped>
.home-container {
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