<template>
  <div>
    <Versions comp-path="CdrSelect"/>
    <nuxt-child/>
    <vuep :scope="scope" :value="value"></vuep>
    <Selects/>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Selects from '~/components/select/examples/Selects.vue'
import Components from '~/components/_index'

import '@rei/cdr-select/dist/cdr-select.css'

const CdrSelect = Components.CdrSelect

export default {
  name: 'CSelect',
  components: {
    Selects,
    Versions,
  },
  data() {
    return {
      scope: { CdrSelect },
      value: `
<template>
  <div>
    <cdr-select
      label="Prompt"
      v-model="selected"
      prompt="Choose one"
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </cdr-select>
    <p>Selected: {{ selected }}</p>
  </div>
</template>

<script>
  module.exports = {
    name: 'live-example',
    data: function() {
      return {
        selected: '1'
      }
    },
    components: {
      CdrSelect
    }
  }
<\/script>`
    }
  }
}
</script>
