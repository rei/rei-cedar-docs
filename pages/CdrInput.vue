<template>
  <div>
    <Versions comp-path="CdrInput"/>
    <nuxt-child/>
    <Inputs/>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Inputs from '~/components/input/examples/Inputs.vue'

import '@rei/cdr-input/dist/cdr-input.css'

export default {
  name: 'Input',
  components: {
    Inputs,
    Versions
  }
}
</script>

<style>

</style>
