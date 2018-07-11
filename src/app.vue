<template>
  <div class="main">
    <div class="cover">
      <header-item></header-item>
      <p>{{text}}</p>
      <router-link to="/home">跳转至主页</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import headerItem from "./components/header.vue";
export default {
  data() {
    return {
      text: "vue project"
    };
  },
  components: {
    headerItem
  }
};
</script>
<style lang="css" scoped>
.main {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #999;
  opacity: 0.9;
  z-index: -1;
}
</style>

