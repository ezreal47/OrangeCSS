import Vue from 'vue'
import Tab from '../src/tabs/tab.vue'
const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tab', () => {
  it('存在', () => {
    expect(Tab).to.exist
  }),
  
  it('接受 selected 属性'), (done) => {

    const element = document.createElement('div')
    document.body.appendChild(element)
    element.innerHTML = `
    <o-tab selected="React">
      <o-tab-head>
        <o-tab-item name="Vue">Vue</o-tab-item>
        <o-tab-item name="React">React</o-tab-item>
      </o-tab-head>

      <o-tab-body>
        <o-tab-pane name="Vue">Tab1的内容</o-tab-pane>
        <o-tab-pane name="React">Tab2</o-tab-pane>
      </o-tab-body>
    </o-tab>
    `
    let vm = new Vue({
      el: element
    })

    vm.$nextTick( () => {
      let item = vm.$el.querySelector(`.tab-item[data-name="React"]`)
      expect(item.classList.contains('active')).to.be.true
      done()
    })
  }
})
