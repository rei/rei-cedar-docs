<template>
  <div>
    <Versions comp-path="CdrHeading"/>
    <nuxt-child/>
    <vuep :scope="scope" :value="value"></vuep>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Components from '~/components/_index'

import '@rei/cdr-heading/dist/cdr-heading.css'

const CdrHeading = Components.CdrHeading

export default {
  name: 'Heading',
  components: {
    Versions
  },
  data() {
    return {
      scope: { CdrHeading },
      value: `
<template>
  <div>
    <cdr-heading
      level="1"
      modifier="spruce-dsp-70">spruce-dsp-70</cdr-heading>
    <cdr-heading
        level="4"
        modifier="spruce-dsp-60">spruce-dsp-60</cdr-heading>
    <cdr-heading
      level="5"
      modifier="spruce-dsp-50">spruce-dsp-50</cdr-heading>
    <cdr-heading
      level="6"
      modifier="spruce-dsp-40">spruce-dsp-40</cdr-heading>
  </div>
</template>

<script>
  module.exports = {
    name: 'live-example',
    components: {
      CdrHeading
    }
  }
<\/script>
`
    }
  }
}
</script>
