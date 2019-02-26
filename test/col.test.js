import Vue from 'vue'
import Col from '../src/col'
const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col',() => {
  it('Col存在', () => {
    expect(Col).to.exist
  })

  it('设置span属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: '12'
      }
    }).$mount(div)
  
    expect(vm.$el.classList.contains(`col-12`)).to.eq(true)
  })

  it('设置order属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        order: '1'
      }
    }).$mount(div)
  
    expect(getComputedStyle(vm.$el).order).to.eq('1')
  })

  it('设置offset属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        offset: '10'
      }
    }).$mount(div)
  
    expect(vm.$el.classList.contains(`offset-10`)).to.eq(true)
  })
})
