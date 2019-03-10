<template>
  <div class="collapse-pane">
    <div class="title" @click="open = !open">
      <slot></slot>
    </div>
    <div class="content" v-if="open">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>

<style lang="scss" scoped>
.collapse-pane {
  .title {
    height: 38px;
    line-height: 38px;
    padding-left: 16px;
    color: #666;
    cursor: pointer;
    position: relative;
    border: 1px solid #dcdee2;
    transition: all .2s ease-in-out;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    display: flex;
    align-items: center;
  }
  .content {
    color: #515a6e;
    padding: 16px;
    background-color: #fff;
  }
}
</style>