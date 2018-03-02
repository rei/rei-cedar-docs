<template>
  <div>
    <Versions comp-path="CdrCheckbox" />
    <nuxt-child/>
    <Checkboxes/>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Checkboxes from '~/components/checkbox/examples/checkboxes.vue'

import '@rei/cdr-checkbox/dist/cdr-checkbox.css'

export default {
  name: 'Checkbox',
  components: {
    Checkboxes,
    Versions
  },
}
</script>

<style>

</style>
