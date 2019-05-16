import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import todoList from './store/todoList'

export default new Vuex.Store({
  // 状态模块化
  modules: {
    todoList: todoList
  },
  state: {
    message: 'this is a message from vuex state'
  },
  getters: {
    upperCaseMessage: state => {
      return state.message.toUpperCase()
    },

    // 返回一个函数，这样就可以实现参数传递等高级功能
    messageSlice: state => {
      return length => {
        return state.message.slice(0, length)
      }
    }
  },
  mutations: {
    // 第一个参数固定是state
    changeMessage(state, payload){
      state.message = payload
    }
  },

  // action可以是异步函数
  actions: {
    // 第一个阐述固定是当前store
    dispatchAddMessage(context, payload){
      setTimeout(() => {
        context.commit('addMessage', this.payload)
      }, 1000)
    }
  }
})
