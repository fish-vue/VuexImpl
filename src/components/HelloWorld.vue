<template>
  <div>
    {{message}}
    <div>
      this.$store.getters.upperCaseMessage:{{upperCaseMessage}}
    </div>
    <div>
      this.$store.getters.messageSlice(7):{{messageSlice}}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    message(){
//    从全局state中读取数据
      return this.$store.state.message
    },
    upperCaseMessage(){
//    从全局getters中读取数据
      return this.$store.getters.upperCaseMessage
    },
    messageSlice(){
      return this.$store.getters.messageSlice(7)
    }
  }
}
</script>
