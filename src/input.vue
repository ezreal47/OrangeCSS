<template>
  <div class="wrapper">
    <input v-if="!search&&!animational"type="text" placeholder="enter something" :disabled="disabled" @change="$emit('change','hi',$event)">
    
    <span v-if="search" class="o-input-search">
      <template v-if="!enterButton">
        <input type="text" placeholder="search something" class="o-input">
        <span class="input-search">
          <svg class="icon"><use xlink:href="#icon-fangdajing">></use></svg>
        </span>
      </template>
        
      <template v-else>
        <input type="text" placeholder="search something" class="o-input-enter">
        <span class="input-search-enter">
          <svg class="icon"><use xlink:href="#icon-fangdajing">></use></svg>
        </span>  
      </template>
    </span>
    
    <div v-if="animational" class="search-form">
      <input type="text" class="a-input">
      <button @click="add"></button>
    </div>
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
    },
    enterButton: {
      type: Boolean,
      default: false
    },
    animational: {
      type: Boolean,
      default:false
    }
  },

  methods: {
    add(e) {
      e.preventDefault()
      document.querySelector(".search-form").classList.toggle("active")
    },
    name() {
      consoel.log('组建内')
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #dcdee2;
$border-color-hover: #47b8e0;
.wrapper {
  font-size: 14px;
  margin: 20px;
  .icon {width: 1em; height: 1em;}
  > input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    transition: all 0.2s;
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
  .o-input-search {
    padding: 0;
    margin: 0;
    position: relative;
    .o-input {
      padding: 4px 10px;
      height: 32px;
      width: 200px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      color: rgba(0,0,0,0.65);
      transition: all 0.2s ease-in-out;
      &:hover {
        border-color: $border-color-hover;
      }
    }
    .input-search {
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translateY(-50%);
      cursor: pointer;
    }
    .o-input-enter {
      padding: 4px 10px;
      height: 32px;
      width: 220px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      color: rgba(0,0,0,0.65);
      transition: all 0.2s ease-in-out;
      &:hover {
        border-color: $border-color-hover;
      }
    }
    .input-search-enter {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      height: 32px;
      padding: 0 16px;
      background-color: $border-color-hover;
      display: inline-flex;
      align-items: center;
      position: absolute;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      &:hover {background:lighten($border-color-hover,5%)}
      > .icon {fill: #fff;}
    }
  }
}
</style>
