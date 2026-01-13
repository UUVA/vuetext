import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useCounterStore = defineStore("counter", () => {
    // 定义数据（state）
    const count = ref(0);

    // 定义一个修改数据的方法（action 同步 + 异步）
    const increment = () => {
        count.value++;
    };

    // 定义一个 getter，返回一个双倍的值
    const doubleCount = computed(() => {
        return count.value * 2;
    });

    // 定义一个异步方法，通过 axios 获取数据
    const list = ref([]);

    const getList = async () => {
        const res = await axios.get(
            "https://s5.360game.360.cn/to5/mini/v21/category.html?cver=1.0.e.000o"
        );
        list.value = res.data.data;
    };

    return {
        count,
        increment,
        doubleCount,
        list,
        getList,
    };
});