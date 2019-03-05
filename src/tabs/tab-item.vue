<template>
  <div class="tab-item" :class="classes" @click="switchTab" :data-name="name">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'tabItem',
  inject: ['eventBus'],
  data(){
    return {
      active: true
    }
  },
  props: {
    name: {
      type: String|Number,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes(){
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  created(){
    if(this.eventBus) {
      this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
    }
  },
  methods: {   
    switchTab() {
      if(this.disabled){ return }
      this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>
<style lang="scss" scoped>
  .tab-item {
    color: #595959;
    flex-shrink: 0;
    padding: 0.8em 2em;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      color: #40a9ff;
    }
    &.active {
      color: #1890ff;
      font-weight: bold;
    }
    &.disabled {
      color: #bfbfbf;
      cursor: not-allowed;
    }
  }
</style>
