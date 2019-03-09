<template>
  <div class="popover" ref="popover">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible" :class="`position-${position}`">
      <slot name="content"></slot>
    </div>

    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  data(){
    return {
      visible: false
    }
  },
  mounted() {
    if(this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.onClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  beforeDestroy() {
    if(this.trigger === 'click') {
      this.$refs.popover.removeEventListener('click', this.onClick)
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open);
        this.$refs.popover.removeEventListener('mouseleave', this.close)
      }
  },
  props: {
    position: {
      type: String,
      default: 'top',
      vaildator(value) {
        return ['top','bottom','left','right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      vaildator(value) {
        return ['click','hover'].indexOf(value) >= 0
      }
    }
  },
  methods: {
    positionContent() {
      const CW = this.$refs.contentWrapper
      document.body.appendChild(CW)
    
      const {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
      const {height: CWheight} = CW.getBoundingClientRect()
      let obj = {
        top: {
          top: top + window.scrollY + 'px',
          left: left + window.scrollX + 'px'
        },
        bottom: {
          top: top + height + window.scrollY + 'px',
          left: left + window.scrollX + 'px'
        },
        left: {
          top: top  + window.scrollY - (height-CWheight) / 2 + 'px',
          left: left + window.scrollX + 'px'
        },
        right: {
          top: top  + window.scrollY - (height-CWheight) / 2 + 'px',
          left: left + window.scrollX + width + 'px'
        }
      }

      CW.style.left = obj[this.position].left
      CW.style.top = obj[this.position].top
    },
    onClickDocument(e) {
      if (this.$refs.popover &&
         (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) { 
            return
         }
    
      if(this.$refs.contentWrapper && 
        (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))){
        return
      }
      this.close()
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close() {
      this.visible = false
      document.removeEventListener('click',this.onClickDocument)
    },
    onClick(event) {
      if(this.$refs.triggerWrapper.contains(event.target)) {
        if(this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    }

  }
}
</script>
<style lang="scss" scoped>
.popover {
  position: relative;
  display: inline-block;
}

.content-wrapper {
  position: absolute;
  border: 1px solid #ebedf0;
  border-radius: 4px;
  padding: 0.5em 1em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  &::after {
    content: '';
    display: block;
    border: 10px solid transparent;
    width: 0px;
    height: 0px;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -16px;
    &::after {
      border-bottom: none;
      border-top-color: pink;
      top: 100%;
      left: 10px;
    }
  }
  &.position-bottom {
    margin-top: 16px;
    &::after {
      border-top: none;
      border-bottom-color: pink;
      bottom: 100%;
      left: 10px;
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -16px;
    &::after {
      border-right: none;
      border-left-color: pink;
      left: 100%;
      top: 20%;
    }
  }
  &.position-right {
    margin-left: 16px;
    &::after {
      border-left: none;
      border-right-color: pink;
      right: 100%;
      top: 20%;
    }
  }
}
</style>
