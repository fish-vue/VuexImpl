<template>
  <div>
    <h2>message from moduleA</h2>
    <div>
      <!-- 从module A中读取数据 -->
      {{$store.state.a.moduleData}}
    </div>
  </div>
</template>

<script>
export default {
}
</script>
