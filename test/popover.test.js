import Vue from 'vue'
import Popover from '../src/popover'
const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('popover', () => {
  it('存在', () => {
    expect(Popover).to.exist
  }),

  it('设置 position 属性', (done) => {
    Vue.component('popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <popover position="left" ref="pop">
        <template slot="content">
          弹出的内容
        </template>
        <button>点击</button>
      </popover>
    `

    const vm = new Vue({
      el: div
    })
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      expect(vm.$refs.pop.$refs.contentWrapper.classList.contains('position-left')).to.be.true
      done()  
    })
  })
})
