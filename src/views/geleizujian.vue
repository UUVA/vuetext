<template>
  <div class="divlv" v-if="showContent">
    <h3 class="title">各类组件++++</h3>
    <nav class="navigation">
      <router-link to="/new" class="nav-link">跳转到new</router-link>
    </nav>
    <nav class="navigation">
      <router-link to="/yidongzujian" class="nav-link">跳转到移动组件</router-link>
    </nav>
    <br>
    <Swiper></Swiper>
    <Elementbiaodan></Elementbiaodan>
  </div>
</template>

<script>
import Swiper from '../newnewcomponents/swiper.vue';
import Elementbiaodan from '../newnewcomponents/elementbiaodan.vue';
export default {
  name: 'geleizujian',
  components: {
    Swiper,
    Elementbiaodan
  },
  data() {
    return {
      showContent: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.showContent = true;
    }, 0);
  }
}
</script>

<style scoped>
.divlv {
  position: relative;
  z-index: 10;
}

.title {
  color: red;
  margin-bottom: 20px;
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