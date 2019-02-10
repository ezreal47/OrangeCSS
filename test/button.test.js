import Vue from 'vue'
import Button from '../src/button'
const expect = chai.expect


Vue.config.productionTip = false
Vue.config.devtools = false


describe('Button', () => {
  it('存在', () => {
    expect(Button).to.be.ok
  })

  it('设置icon', () => {
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
  })

  it('变成Loading状态', () => {
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

  })

  it('设置size', () => {
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
  })

  it('设置type', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        type: 'primary'
      }
    })
    vm.$mount();

    expect(vm.$el.classList.contains('primary')).to.eq(true)

    vm.$el.remove()
    vm.$destroy()
  })
})

