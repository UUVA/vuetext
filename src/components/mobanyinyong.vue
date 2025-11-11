<template>
  <div class="mobanyinyong">
    <hr>
    <h2>模板引用</h2>
    <div class="container" ref="container">
      {{ content }}
    </div>
    <button @click="changeContent">改变内容</button>
    <br>
    <input type="text" ref="username"></input>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'mobanyinyong',
  data() {
    return {
      content: '这是模板引用的内容'
    }
  },
  methods: {
    changeContent() {
      console.log(this.$refs.container, "1111111111111111111");
      this.$refs.container.innerHTML = '55555555555';
      console.log(this.$refs.username.value, "2222222222222222222");
    }
  }
}
</script>

<style scoped>
.mobanyinyong {
  color: yellow;
}
</style>