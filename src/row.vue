<template>
  <div class="row" :style="gutterStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ['gutter'],
  computed: {
    gutterStyle(){
      let {gutter} = this
      return {
        marginLeft: -gutter/2 + 'px', 
        marginRight: -gutter/2 + 'px'
      }
    }
  },
  mounted(){
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  }
}
</script>
<style lang="scss" scoped>
  .row {
    display: flex;
  }
</style>
