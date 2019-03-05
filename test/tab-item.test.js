import Vue from 'vue'
import TabItem from '../src/tabs/tab-item.vue'
const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabItem', () => {
  it('存在', () => {
    expect(TabItem).to.exist
  }),

  it('接受 name', () => {
    const Constructor = Vue.extend(TabItem)
    const vm = new Constructor({
      propsData: {
        name: 'Vue'
      }
    }).$mount()

    expect(vm.$el.getAttribute('data-name')).to.eq('Vue')
  }),

  it('接受 disabled', () => {
    const Constructor = Vue.extend(TabItem)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()

    expect(vm.$el.classList.contains('disabled')).to.be.true

    const callback = sinon.fake()
    vm.$on('click',callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })
  
})