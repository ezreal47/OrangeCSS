<template>
  <div class="tab-pane" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  inject: ['eventBus'],
  data(){
    return {
      active: false
    }
  },
  props: {
    name: {
      type: String|Number,
      required: true
    }
  },
  created(){
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  }
}
</script>
<style lang="scss" scoped>
  .tab-pane {
    background-color: red;
  }
</style>
