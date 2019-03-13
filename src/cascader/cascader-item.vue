<template>
  <div class="cascaderItem">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)" :key="item.id">
        {{item.name}}
        <span v-if="item.children">></span>
      </div> 
    </div>

    <div class="right" v-if="rightItems">
      <cascaderItem :items="rightItems" :level="level + 1" :selected="selected" 
      @update:selected="onUpdateSelected"></cascaderItem>   
    </div>
    </cascaderItem>
  </div>  
</template>

<script>
export default {
  name: 'cascaderItem',
  props: {
    items: {
      type: Array
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  computed: {
    rightItems() {
      let currentSelected = this.selected[this.level]
      if(currentSelected && currentSelected.children) {
        return currentSelected.children
      } else {
        return null
      }
    } 
  },
  methods: {
    onClickLabel(item) {
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      copy.splice(this.level + 1)
      this.$emit('update:selected', copy)
    },
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    }
  }


}
</script>

<style lang="scss" scoped>
  .cascaderItem {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    // border: 1px solid pink;
    // margin-top: -1px;
    // margin-bottom: -1px;
    height: 200px;
    left {
      height: 100%;
      
    }
    .right {
      height: 100%;
      border-left: 1px solid #ebedf0;
    }
    .label {
      padding: .5em 1em;
    }
  }
</style>
