<template>
  <div>
    <h2>通过module划分模块</h2>
    <div v-for="item of todoList">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    todoList(){
      // 读取list模块中的list数据
      return this.$store.state.todoList.list
    }
  }
}
</script>
