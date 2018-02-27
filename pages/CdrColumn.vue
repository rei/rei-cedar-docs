<template>
  <div>
    <div id="CdrCol" v-html="colMD"></div>
    <Columns/>
  </div>
</template>

<script>
import colMD from '~/components/column/archive/cdrCol.md'
import Columns from '~/components/column/examples/Columns.vue'

export default {
  name: 'Column',
  computed: {
    colMD() {
      return colMD
    }
  },
  components: {
    Columns
  }
}
</script>

<style>

</style>
