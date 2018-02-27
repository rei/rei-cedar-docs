<template>
  <div>
    <div id="CdrRadio" v-html="radioMD"></div>
    <Radios/>
  </div>
</template>

<script>
import radioMD from '~/components/radio/archive/cdrRadio.md'
import Radios from '~/components/radio/examples/Radios.vue'

import '@rei/cdr-radio/dist/cdr-radio.css'

export default {
  name: 'Radio',
  computed: {
    radioMD() {
      return radioMD
    }
  },
  components: {
    Radios,
  }
}
</script>

<style>

</style>
