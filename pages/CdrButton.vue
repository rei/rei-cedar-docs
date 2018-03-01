<template>
  <div>
    <Versions comp-path="CdrButton"/>
    <nuxt-child/>
    <Buttons/>
  </div>
</template>

<script>
import Buttons from '~/components/button/examples/Buttons.vue'
import Versions from '~/components/Versions.vue'

import '@rei/cdr-button/dist/cdr-button.css'

export default {
  name: 'Button',
  components: {
    Buttons,
    Versions
  },
}
</script>

<style>

</style>
