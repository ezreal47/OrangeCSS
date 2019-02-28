<template>
  <div class="message">
    <svg class="icon">
      <use :xlink:href="`#icon-${typeName}`"></use>
    </svg>
    <slot></slot>
  </div>  
</template>
<script>

export default {
  data(){
    return {
      iconNames: ['info','success']
    }
  },
  props: {
    autoCloseDelay: {
      type: Number,
      default: 3
    },
    typeName: {
      type: String
    } 
  },
  mounted() {
    setTimeout(() => {
      this.close()
    }, this.autoCloseDelay * 1000)  
  },
  methods: {  
    close() {
      this.$el.remove()
      this.$destroy()
    }
  }
}
</script>
<style lang="scss" scoped>
  .message {
    border: 1px solid#ebedf0;
    border-radius: 8px;
    position: fixed;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 18px;
    box-shadow: 1px 3px 20px -6px rgba(0,0,0,0.61);
    text-align: center;
    display: flex;
    align-items: center;
    
    // justify-content: flex-end;
    .icon {
      width: 18px;
      height: 18px;
      fill: #47b8e0;
      margin-right: 10px;
    }
  }
</style>
