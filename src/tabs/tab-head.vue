<template>
  <div class="tab-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
  </div>
</template>
<script>
export default {
  name: 'tabHead',
  inject: ['eventBus'],
  mounted(){
    this.eventBus.$on('update:selected',(item, vm)=>{
      let {width,left} = vm.$el.getBoundingClientRect()
      let {left: headLeft} = this.$refs.head.getBoundingClientRect()
      
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.transform = `translateX(${left - headLeft}px)`
    })
  }
  
}
</script>
<style lang="scss" scoped>
  .tab-head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid black;
    position: relative;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 2px solid blueviolet;
      transition: all 0.5s;
    }  
  }
</style>
