<template>
  <div class="wrapper">
    <input type="text" placeholder="enter something" :disabled="disabled" @change="$emit('change','hi',$event)">
    <span v-if="search">
      <input type="text" value="search">
    </span>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    search: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
$border-color: #dcdee2;
$border-color-hover: #47b8e0;
.wrapper {
  font-size: 14px;
  > input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    &:hover {
      border-color: $border-color-hover;
    }
    &[disabled] {
      outline: none;
      cursor: not-allowed;
      border-color: $border-color;
      background-color: #f3f3f3;
    }
  }
}
</style>
