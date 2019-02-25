<template>
  <div class="col" :class="colClass" :style="gutterStyle">
    <div class="showBackgroundColor">
      <slot></slot>
    </div>
  </div>  
</template>
<script>
export default {
  data(){
    return {
      gutter: null
    }
  },
  props: ['span','order','offset'],
  computed: {
    colClass() {
      let {span, offset, order} = this;
      return [span && `col-${span}`, offset && `offset-${offset}`, order]
    },
    gutterStyle() {
      let {gutter} = this
      return {
        paddingLeft: gutter/2 + 'px',
        paddingRigt: gutter/2 + 'px'
      }
    }
  }
 
}
</script>
<style lang="scss" scoped>
  .col {
    width: 50%;
    height: 60px;
  
    @for $n from 1 through 24 {
      &.col-#{$n} {
        width: ($n/24)*100%;
      }
    }

    @for $n from 1 through 24 {
      &.offset-#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
    .showBackgroundColor {
      background-color: pink;
      text-align: center;
      height: 60px;
      line-height: 60px;
    }
  }
   
</style>
