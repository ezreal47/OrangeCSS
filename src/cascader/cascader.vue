<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <input type="text" placeholder="请选择" :value="result">
    </div>
    
    <div class="popover" v-if="popoverVisible">
        <cascaderItem :items="source" :selected="selected" @update:selected="onUpdateSelected"></cascader-item>  
    </div>  
  </div>
</template>
<script>
import cascaderItem from './cascader-item'
export default {
  components: {cascaderItem},
  props: {
    source: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      popoverVisible: false
    }
  },
  computed: {
    result() {
      return this.selected.map((item) => {
        return item.name
      }).join('/')
    }
  },
  methods: {
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    }
  }
}
</script>
<style lang="scss" scoped>
  .cascader {
    max-width: 500px;
    position: relative;
    .trigger {
      width: 200px;
      height: 36px;
      >input {
        border: 1px solid #dcdee2;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        transition: all 0.1s;
        padding: 14px;
        &:hover {
          border-color: #57a3f3;
        }
      }
    }
    .popover {
      background-color: #fff;
      position: absolute;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      height: 200px;
      border: 1px solid #ebedf0;
    }
  }
</style>
