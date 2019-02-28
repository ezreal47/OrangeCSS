import Message from './message'

export default {
  install(Vue, options){
    Vue.prototype.$message = {
      trigger(type, message){
        let Constructor = Vue.extend(Message)
        let vm = new Constructor({
          propsData: {
            typeName: type
          }
        })
        
        vm.$slots.default = [message]
        vm.$mount()
        document.body.appendChild(vm.$el)
        console.log(vm.$props)
      },

      info(message){
        this.trigger('info',message)
      },
      success(message){
        this.trigger('success',message)
      },
      error(message){
        this.trigger('error',message)
      },
      warning(message){
        this.trigger('warning',message)
      }
      

    }
  }
}