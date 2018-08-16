<template>
  <div class="header">
   <h1 class="title">{{newText}}</h1>
  </div>
</template>
<script>
export default {
  data ({getName}) {
    return {
      text: 'vue',
      newText: getName()
    }
  },
  methods: {
    getName () {
      return 'hello vue'
    }
  }
}
</script>
<style scoped lang="stylus">
.header
  width: 100%;
  text-align: center;
  .title
    font-size: 100px;
    color: rgba(175, 47, 47, 0.4);
    font-weight: 100;
    margin: 20px;
</style>

