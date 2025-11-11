<template>
    <div class="shijianxiushifu">
        <h3>事件修饰符</h3>
        <!-- 阻止事件的默认行为 -->
         <a @click.prevent="click11" href="http://www.baidu.com">百度百度</a>

         <!-- 阻止时间冒泡 -->
          <div @click="clickDiv">
            <p @click.stop="clickP">测试冒泡</p>
          </div>

    </div>
</template>

<script>
export default {
    name: 'shijianxiushifu',
    data() {
        return {

        }
    },
    methods: {
        click11() {
            // e.preventDefault()
            console.log('点击了百度百度')
        },
        clickDiv() {
            console.log('点击了div')
        },
        clickP() {
            console.log('点击了p')
        }
    }
    }

</script>