<template>
  <div>
    <div v-html="colMD"></div>
    <div v-html="rowMD"></div>
    <Grids/>
  </div>
</template>

<script>
import colMD from '~/components/column/archive/cdrCol.md'
import rowMD from '~/components/row/archive/cdrRow.md'
import Grids from '~/components/grid/examples/Grids.vue'

export default {
  name: 'Grid',
  components: {
    Grids
  },
  computed: {
    colMD () {
      return colMD
    },
    rowMD () {
      return rowMD
    }
  }
}
</script>

<style>

</style>
