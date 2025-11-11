<template>
    <div class="stylebangding">
        <h3>样式绑定</h3>
        <p :style="{ color: activeColor, fontSize: fontSize + 'px' }">
            1.行内样式绑定
        </p>
    </div>
</template>

<script>
export default {
    name: 'stylebangding',
    data() {
        return {
            activeColor: 'red',
            fontSize: 30,
            objectStyle: {
                color: 'red',
                fontSize: '20px'
            }
        }

    }
}

</script>

<style>
.stylebangding {
    color: green;
}
</style>