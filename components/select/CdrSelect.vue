<template>
  <div>
    <div id="CdrSelect" v-html="selectMD"></div>
    <Selects/>
  </div>
</template>

<script>
import selectMD from '~/components/select/archive/cdrSelect.md'
import Selects from '~/components/select/examples/Selects.vue'

import '@rei/cdr-select/dist/cdr-select.css'

export default {
  name: 'CSelect',
  components: {
    Selects
  },
  computed: {
    selectMD() {
      return selectMD
    }
  }
}
</script>

<style>

</style>
