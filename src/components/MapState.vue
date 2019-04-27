<template>
  <div>
    <h2>
      使用mapState、mapGetters
      快速将state映射为计算属性
    </h2>

    <div>
      'message': {{message}}
    </div>

    <div>
      'upperCaseMessage': {{upperCaseMessage}}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState([
      'message'
    ]),
    ...mapGetters([
      'upperCaseMessage'
    ])
  }
}
</script>
