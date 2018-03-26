<template>
  <div>
    <Versions comp-path="CdrInput"/>
    <nuxt-child/>
    <vuep :scope="scope" :value="value"></vuep>
    <Inputs/>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Inputs from '~/components/input/examples/Inputs.vue'
import Components from '~/components/_index'

import '@rei/cdr-input/dist/cdr-input.css'

const CdrInput = Components.CdrInput

export default {
  name: 'Input',
  components: {
    Inputs,
    Versions
  },
  data() {
    return {
      scope: { CdrInput },
      value: `
<template>
  <div>
  <h2>Text Input</h2>
    <cdr-input
      v-model="required"
      label="Default required validation"
      required
    />
  </div>
</template>

<script>
  module.exports = {
    name: 'live-name',
    components: {
      CdrInput
    },
    data: function() {
      return {
        required: ''
      }
    }
  }
<\/script>`
    }
  }
}
</script>
