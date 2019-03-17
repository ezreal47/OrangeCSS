<template>
  <div class="carousel" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="carousel-window" ref="window">
      <div class="carousel-wrapper">
         <slot></slot>
      </div>  
    </div>
    <div class="carousel-dots">
      <span class="icon" @click="select(selectedIndex - 1)">
        <svg><use xlink:href="#icon-left"></use></svg>
      </span>
      <span v-for="n in childrenLength" :key="n.id" :class="{active: selectedIndex === n-1}"
      @click="select(n-1)">
        {{n}}
      </span>
       <span class="icon" @click="select(selectedIndex + 1)">
         <svg><use xlink:href="#icon-left-copy"></use></svg>
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
    autoplay: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      childrenLength: 0,
      lastIndex: undefined,
      timerId: undefined
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
    if(this.autoplay) {
      this.play()
    }
    this.childrenLength = this.$children.length
  },
  updated() {
    this.updateChildren()
  },
  methods: {
    play() {
      if(this.timerId) { return }
      let run = () => {
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index + 1
        this.select(newIndex)
        this.timerId = setTimeout(run, 3000)
      }
      this.timerId = setTimeout(run, 3000)
    },
    pause() {
      window.clearTimeout(this.timerId)
      this.timerId = undefined
    },
    onMouseEnter() {
      this.pause()
    },
    onMouseLeave() {
      if(this.autoplay) {
        this.play()
      }
    },
    getSelected() {
      let first = this.$children[0]
      return this.selected || first.name
    },
    updateChildren() {
      let result = this.getSelected()
      this.$children.forEach(vm => {
        let reverse = this.selectedIndex > this.lastIndex ? false : true
        if (this.timerId) {
          if (this.lastIndex === this.$children.length - 1 && this.selectedIndex === 0) {
            reverse = false
          } if (this.lastIndex === 0 && this.selectedIndex === this.$children.length - 1) {
            reverse = true
          }
        }
        vm.reverse = reverse
        this.$nextTick(() => {
          vm.selected = result
        })
      })

    },
    select(newIndex) {
      this.lastIndex = this.selectedIndex
      if(newIndex === -1) { newIndex = this.names.length - 1}
      if(newIndex === this.names.length) { newIndex = 0 }
      this.$emit('update:selected', this.names[newIndex])
    }
  }
}
</script>
<style lang="scss" scoped>
.carousel {
  display: inline-block;
  &-window {
    overflow: hidden;
    position: relative;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    display: flex;
    justify-content: center;
    margin-top: 6px;
    .icon {
      transition: fill 0.2s;
      background: #fff; fill: #46a1de;
      &:hover {fill: #FFBC42}  
    }
    > span {
      display: inline-flex;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      margin: 0 4px;
      background-color: #46a1de;
      font-size: 12px;
      color: #fff;
      cursor: pointer;
      &.active {background-color: #FFBC42}
    }
  }
}
</style>
