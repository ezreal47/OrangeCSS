import Vue from 'vue'
import Input from '../src/input'
const expect = chai.expect 

Vue.config.productionTip = false
Vue.config.devtools = false

describe('input', () => {
  it('存在', () => {
    expect(Input).to.exist
  }),

  it('接受 disabled 属性', () => {
    let Constructor =  Vue.extend(Input)
    let vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    let el = vm.$el.querySelector('input')
    expect(el.disabled).to.be.true
  }),

   it('接受 search 属性', () => {
    let Constructor =  Vue.extend(Input)
    let vm = new Constructor({
      propsData: {
        search: true
      }
    }).$mount()
    let el = vm.$el.querySelector('span')
    expect(el.classList.contains('o-input-search')).to.be.true
  }),

  it('接受 animational 属性', () => {
    let Constructor =  Vue.extend(Input)
    let vm = new Constructor({
      propsData: {
        animational: true
      }
    }).$mount()
    let el = vm.$el.querySelector('.search-form')
    expect(el).to.exist
  })
})