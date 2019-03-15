<template>
  <transition name="carousel">
    <div class="carousel-item" v-if="visible" :class="{reverse}">
      <slot></slot>
    </div>  
  </transition>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: undefined,
      reverse: false
    }
  },
  computed: {
    visible() {
      return this.selected === this.name 
    }
  }
}

</script>
<style lang="scss" scoped>
.carousel-item {
  // display: inline-block; 
}
.carousel-leave-active {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.carousel-enter-active, .carousel-leave-active {
  transition: all 0.5s;
}

.carousel-enter {
  transform: translateX(100%);
  opacity: 0.5;
}
.carousel-enter.reverse {
  transform: translateX(-100%);
  opacity: 0.5;
}

.carousel-leave-to {
  transform: translateX(-100%);
  opacity: 0.5;

}
.carousel-leave-to.reverse {
  transform: translateX(100%);
  opacity: 0.5;
}

</style>