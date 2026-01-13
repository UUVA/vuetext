<template>
    <div>
        <h1 class="title">vant111111</h1>
        <div class="vant-demo-container">
            <h3>Vant 地址编辑组件演示</h3>
            <p class="tip">请在浏览器开发工具的移动端模式调试。</p>

            <van-address-edit :area-list="areaList" show-delete show-set-default show-search-result
                :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave"
                @delete="onDelete" @change-detail="onChangeDetail"></van-address-edit>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { AddressEdit as VanAddressEdit, showToast } from 'vant';
import 'vant/lib/index.css';
const searchResult = ref([]);
const addressKey = ref(0); // 添加key用于强制重新渲染组件
const areaList = {
    province_list: {
        110000: '北京',
        120000: '天津',
        130000: '河北',
    },
    city_list: {
        110100: '北京市',
        120100: '天津市',
        130100: '石家庄市',
    },
    county_list: {
        110101: '东城区',
        120101: '和平区',
        130101: '长安区',
    }
};

const onSave = () => {
    showToast('保存成功');
};

const onDelete = () => {
    showToast('删除成功');
    // 通过改变key的值强制重新渲染组件，从而清空输入框内容
    addressKey.value += 1;
};

const onChangeDetail = (val) => {
    if (val) {
        searchResult.value = [
            {
                name: '三亚市',
                address: '三亚学院'
            }
        ]
    } else {
        searchResult.value = []
    }
};
</script>
  
<style scoped>
.title {
    color: aquamarine;
}
  
.vant-demo-container {
    background-color: #f7f8fa;
    padding-top: 20px;
}
  
h3 {
    text-align: center;
    margin: 0;
    padding: 10px;
    color: #323233;
}
  
.tip {
    text-align: center;
    color: #969799;
    font-size: 13px;
    margin-bottom: 20px;
}
</style>