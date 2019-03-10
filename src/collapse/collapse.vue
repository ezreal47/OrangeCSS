<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .collapse {
    background-color: #f7f7f7;
    border-radius: 4px;
    border: 1px solid #dcdee2;
    max-width: 900px;
    overflow: hidden;
  }
</style>
