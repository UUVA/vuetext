<template>
    <div class="zujianshijianVmodel">
        <h3>组件自定义事件v-model</h3>
        <p>搜索内容：{{ search }}</p>
        <zujianshijianVmodelSearch @searchtext="getSearch"></zujianshijianVmodelSearch>
    </div>
</template>

<script>
import zujianshijianVmodelSearch from '../pages/zujianshijianVmodelSearch.vue';

export default {
    name: 'zujianshijianVmodel',
    data() {
        return {
            search: ''
        }
    },
    components: {
        zujianshijianVmodelSearch
    },
    methods: {
        getSearch(data){
            this.search = data;
            console.log(data, '++++++++++++++');
        }
    }
}
</script>

<style scoped>
.zujianshijianVmodel {
    color: green;
}
</style>