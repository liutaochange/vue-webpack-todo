<template>
  <div class="helper">
    <span class="left">items left</span>
    <span class="tabs">
      <span v-for="(status,index) in states" :key="index" :class="[status, filter === status ? 'active' : '']"  @click="toggleFilter(status)">
        {{status}}
      </span>
    </span>
    <span class="clear" @click="clearAll">clear completed</span>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      states: ['all', 'active', 'completed']
    }
  },
  methods: {
    toggleFilter () {
      return ''
    },
    clearAll () {
      return ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.helper
  font-weight 100
  display flex
  justify-content space-between
  padding 5px 0
  line-height 30px
  background-color #fff
  font-size 14px
  font-smoothing: antialiased
  .left, .clear, .tabs
    padding 0 10px
    box-sizing border-box
  .left, .clear
    width 150px
  .left
    text-align left
  .clear
    text-align right
    cursor pointer
  .tabs
    width 200px
    display flex
    justify-content space-around
    * 
      display inline-block
      padding 0 10px
      cursor pointer
      border 1px solid rgba(175,47,47,0)
      &.actived
        border-color rgba(175,47,47,0.4)
        border-radius 5px
</style>




