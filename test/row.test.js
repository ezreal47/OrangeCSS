import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'
const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在', () => {
    expect(Row).to.exist
  })

  it('设置gutter属性', (done) => {
    Vue.component('o-row',Row)
    Vue.component('o-col',Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <o-row gutter="20">
        <o-col span="12"></o-col>
        <o-col span="12"></o-col>
      </o-row>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')
      // console.log(vm.$el.outerHTML)
      done()
    })
  })
})


