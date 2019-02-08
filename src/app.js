import Vue from 'vue'
import Button from './button'

Vue.component('o-button', Button)

new Vue({
  el: '#app'
})



import chai from 'chai'
const expect = chai.expect
//单元测试
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'search'
    }
  })
  vm.$mount()

  let element = vm.$el.querySelector('use')
  expect(element.getAttribute('xlink:href')).to.eq('#icon-search')

  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'search',
      loading: true
    }
  })
  vm.$mount()

  let element = vm.$el.querySelector('use')
  expect(element.getAttribute('xlink:href')).to.eq('#icon-loading')

  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      size: 'large'
    }
  })
  vm.$mount()

  expect(vm.$el.classList.contains('large')).to.eq(true)

  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      type: 'primary'
    }
  })
  vm.$mount();

  expect(vm.$el.classList.contains('primary')).to.eq(true)
}