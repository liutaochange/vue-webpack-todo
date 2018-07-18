<template>
  <div class="tabs">
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'i am tabs'
    }
  }
}
</script>

<style scoped lang="stylus">
.tabs {
  font-size: 16px;
  color: hotpink;
}
</style>

