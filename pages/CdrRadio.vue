<template>
  <div>
    <Versions comp-path="CdrRadio"/>
    <nuxt-child/>
    <Radios/>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Radios from '~/components/radio/examples/Radios.vue'

import '@rei/cdr-radio/dist/cdr-radio.css'

export default {
  name: 'Radio',
  components: {
    Radios,
    Versions
  }
}
</script>

<style>

</style>
