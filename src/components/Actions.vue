<template>
  <div>
    <h2> 使用dispatch提交commit</h2>
    <input v-model="payload"/>
    <button @click="dispatch">提交commit</button>
    <button @click="mapDispatch">通过dispatchAddMessage提交commit</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

// mutation函数应该是同步函数
export default {
  data(){
    return {
      payload: ''
    }
  },
  methods: {
    // 组件通过调用commit方法触发store的mutations函数
    dispatch(){
      this.$store.dispatch('dispatchAddMessage', this.payload)
    },

    // 这种写法比较方便，但是无法携带参数
    ...mapActions({
      // 将 this.mapDispatch() 映射为this.$store.dispatch(dispatchAddMessage)
      mapDispatch: 'dispatchAddMessage'
    })
  }
}
</script>
