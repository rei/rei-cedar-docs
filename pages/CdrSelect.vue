<template>
  <div>
    <Versions comp-path="CdrSelect"/>
    <nuxt-child/>
    <Selects/>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Selects from '~/components/select/examples/Selects.vue'

import '@rei/cdr-select/dist/cdr-select.css'

export default {
  name: 'CSelect',
  components: {
    Selects,
    Versions,
  }
}
</script>

<style>

</style>
