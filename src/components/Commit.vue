<template>
  <div>
    <h2> 使用commit提交对store的修改</h2>
    <input v-model="payload"/>
    <button @click="commit">提交数据</button>
  </div>
</template>

<script>
// mutation函数应该是同步函数
export default {
  data(){
    return {
      payload: ''
    }
  },
  methods: {
    // 组件通过调用commit方法触发store的mutations函数
    commit(){
      this.$store.commit('changeMessage', this.payload)
    }
  }
}
</script>
