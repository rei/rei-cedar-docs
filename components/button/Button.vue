<template>
  <div>
    <div v-html="buttonMD"></div>
    <Buttons/>
  </div>
</template>

<script>
import buttonMD from '~/components/button/archive/cdrButton.md'
import Buttons from '~/components/button/examples/Buttons.vue'

import '@rei/cdr-button/dist/cdr-button.css'

export default {
  name: 'Button',
  components: {
    Buttons
  },
  computed: {
    buttonMD () {
      return buttonMD
    }
  }
}
</script>

<style>

</style>
