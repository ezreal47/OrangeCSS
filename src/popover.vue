<template>
  <div class="popover" @click="onClick" ref="popover">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
      <slot name="content"></slot>
    </div>

    <span ref="tiggerWrapper" style="display: inline-block">
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
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper)
      let {width, height, top, left} = this.$refs.tiggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
    },
    onClickDocument(e) {
     
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
      if(this.$refs.tiggerWrapper.contains(event.target)) {
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
    transform: translateY(-100%);
    padding: 0.5em 1em;
    margin-top: -16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    background-color: #fff;
    &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      border-top-color: pink;
      width: 0px;
      height: 0px;
      position: absolute;
      top: 100%;
      left: 10px;
    }
  }
</style>
