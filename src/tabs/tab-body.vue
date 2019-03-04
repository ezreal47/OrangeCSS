<template>
  <div class="tab-body">
    <slot></slot>
  </div>
</template>
<script>
export default {
  inject: ['eventBus']
}
</script>
<style lang="scss" scoped>
  .tab-body {
    padding: 20px 0;
  }
</style>
