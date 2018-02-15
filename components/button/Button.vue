<template>
  <div>
    <div v-html="buttonMD"></div>
    <Buttons/>
  </div>
</template>

<script>
import buttonMD from './archive/cdrButton.md'
import Buttons from './examples/Buttons.vue'

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
