<template>
    <button class="o-button" :class="[size,type,icon,{loading}]" >
      <svg v-if="icon && !loading" class="icon">
        <use :xlink:href="`#icon-${icon}`"></use>
      </svg>
      <svg v-if="loading" class="icon loading">
        <use :xlink:href="`#icon-loading`"></use>
      </svg>
      <slot></slot>
    </button>
</template>

<script>
export default {
  props: ['icon','loading','size','type']
}
</script>


<style lang="scss">
@keyframes spin {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg)}
}
.o-button {
  font-size: var(--font-size);
  height: var(--button-height);
  background-color: var(--button-bg);
  border-radius: var(--border-radius);
  color: var(--color);
  border: 1px solid var(--border-color);
  padding: 0 1.2em;
  outline: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  transition: all 0.2s linear;

  &:hover {color: #47b8e0; border-color: #47b8e0; fill: #47b8e0;}
  &.large {font-size: calc(var(--font-size) * 1.2); height: calc(var(--button-height) * 1.2); border-radius: calc(var(--border-radius) * 1.2)}
  &.small {font-size: calc(var(--font-size) * 0.8); height: calc(var(--button-height) * 0.9); border-radius: calc(var(--border-radius) * 0.9)} 
  &.primary {background-color:#47b8e0; color: #fff; fill: #fff; border-color: #47b8e0; &:hover {background:lighten(#47b8e0,10%)}}
  &.success {background-color:#19be6b; color: #fff; fill: #fff; border-color: #19be6b;  &:hover {background:lighten(#19be6b,10%)}}
  &.error {background-color: #f94e3f; color: #fff; fill: #fff; border-color: #f94e3f; &:hover {background:lighten(#f94e3f,10%)}}
  &.loading {background-color: lighten(#69b7ff,10%); color: #fff; fill: #fff;} 
  
  > .icon {margin-right: .4em}
  > .loading {animation: spin 2s infinite linear;}
}
</style>

