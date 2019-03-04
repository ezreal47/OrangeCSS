<template>
  <div class="tab-item" :class="classes" @click="switchTab">
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
    }
  },
  computed: {
    classes(){
      return {
        active: this.active
      }
    }
  },
  created(){
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  },
  methods: {
    switchTab() {
      this.eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>
<style lang="scss" scoped>
  .tab-item {
    flex-shrink: 0;
    border: 1px solid red;
    padding: 0.8em 2em;
    cursor: pointer;
    &:hover {
      color: blue;
    }
    &.active {
      background-color: red;
    }
  }
</style>
