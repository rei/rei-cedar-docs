<template>
  <div>
    <div v-html="checkboxMD"></div>
    <Checkboxes/>
  </div>
</template>

<script>
import checkboxMD from '~/components/checkbox/archive/cdrCheckbox.md'
import Checkboxes from '~/components/checkbox/examples/checkboxes.vue'

import '@rei/cdr-checkbox/dist/cdr-checkbox.css'

export default {
  name: 'Checkbox',
  components: {
    Checkboxes
  },
  computed: {
    checkboxMD () {
      return checkboxMD
    }
  }
}
</script>

<style>

</style>
