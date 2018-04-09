<template>
  <div>
    <Versions comp-path="CdrText" />
    <nuxt-child/>
    <no-ssr>
      <vuep :value="value" :scope="scope"></vuep>
    </no-ssr>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Components from '~/components/_index'

const CdrText = Components.CdrText

export default {
  name:'CText',
  components: {
    Versions
  },
  data() {
    return {
      scope: { CdrText },
      value:`
<template>
  <div>
    <cdr-text tag="h2" modifier="display">h2 display heading</cdr-text>
    <cdr-text>Default paragraph</cdr-text>
    <cdr-text modifier="body">Body paragraph</cdr-text>
    <cdr-text tag="em" modifier="citation">citation</cdr-text>
  </div>
</template>

<script>
  module.exports = {
    name: 'live-example',
    components: {
      CdrText
    },
  }
<\/script>`
    }
  }
}
</script>