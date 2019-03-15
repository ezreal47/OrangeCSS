<template>
  <div class="carousel">
    <div class="carousel-window" ref="window">
      <div class="carousel-wrapper">
         <slot></slot>
      </div>  
    </div>
    <div class="carousel-dots">
      <span v-for="n in childrenLength" :key="n.id" :class="{active: selectedIndex === n-1}"
      @click="select(n-1)">
        {{n}}
      </span>
    </div>
  </div>  
</template>
<script>
export default {
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      childrenLength: 0,
      lastIndex: undefined
    }
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.selected) || 0
    },
    names() {
      return this.$children.map(vm => vm.name)
    }
  },
  mounted() {
    this.updateChildren()
    // this.play()
    this.childrenLength = this.$children.length
  },
  updated() {
    this.updateChildren()
  },
  methods: {
    play() {
      // const names = this.$children.map(vm => vm.name)
      let run = () => {
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index - 1
        if(newIndex === -1) { newIndex = this.names.length - 1}
        if(index === this.names.length) { newIndex = 0 }
        this.select(newIndex)
        setTimeout(run, 3000)
      }
      setTimeout(run, 3000)
    },
    getSelected() {
      let first = this.$children[0]
      return this.selected || first.name
    },
    updateChildren() {
      let result = this.getSelected()
      this.$children.forEach(vm => {
        // vm.selected = result
        vm.reverse = this.selectedIndex > this.lastIndex ? false : true
        this.$nextTick(() => {
          vm.selected = result
        })
        // const names = this.$children.map()
      })

    },
    select(index) {
      this.lastIndex = this.selectedIndex
      this.$emit('update:selected', this.names[index])
    }
  }
}
</script>
<style lang="scss" scoped>
.carousel {
  border: 1px solid green;
  width: 300px;
  &-window {
    overflow: hidden;
    border: 1px solid blue;

  }
  &-wrapper {
    position: relative;
  }
  &-dots > span {
    &.active {color: red}
  }
}
</style>
