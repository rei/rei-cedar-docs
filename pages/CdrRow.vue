<template>
  <div>
    <div id="CdrRow" v-html="rowMD"></div>
    <Rows/>
  </div>
</template>

<script>
import rowMD from '~/components/row/archive/cdrRow.md'
import Rows from '~/components/row/examples/Rows.vue'

export default {
  name: 'Row',
  computed: {
    rowMD() {
      return rowMD
    }
  },
  components: {
    Rows
  }
}
</script>

<style>

</style>
