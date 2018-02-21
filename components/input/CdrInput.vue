<template>
  <div>
    <div id="CdrInput" v-html="inputMD"></div>
    <Inputs/>
  </div>
</template>

<script>
import inputMD from '~/components/input/archive/cdrInput.md'
import Inputs from '~/components/input/examples/Inputs.vue'

export default {
  name: 'Input',
  computed: {
    inputMD() {
      return inputMD
    }
  },
  components: {
    Inputs
  }
}
</script>

<style>

</style>
