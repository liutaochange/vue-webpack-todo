<template>
  <div class="item">
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'i am item'
    }
  }
}
</script>

<style scoped lang="stylus">
.item {
  font-size: 16px;
  color: hotpink;
}
</style>

