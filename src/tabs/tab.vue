<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'

export default {
  props: {
    selected: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      eventBus: new Vue()
    }
  },
  provide(){
    return {
      eventBus: this.eventBus
    }
  },
  mounted(){
    this.$children.forEach( (vm) => {
      if(vm.$options.name === 'tabHead'){
        vm.$children.forEach((item) => {
          if(item.$options.name === 'tabItem' && item.name === this.selected){
            this.eventBus.$emit('update:selected', this.selected, item)
          }
        })
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  .tab {
    max-width: 800px;
  }
</style>
