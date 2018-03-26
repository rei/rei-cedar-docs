<template>
  <div>
    <Versions comp-path="CdrButton"/>
    <nuxt-child/>
    <no-ssr>
      <vuep :value="value" :scope="scope"></vuep>
    </no-ssr>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Components from '~/components/_index'

import '@rei/cdr-button/dist/cdr-button.css'

const CdrButton = Components.CdrButton

export default {
  name: 'Button',
  data() {
    return {
      scope: { CdrButton },
      value: `
<template>
  <div>
    <div class="button-example">
      <cdr-button
        data-backstop="cdr-button"
        type="submit"
        :on-click="log"
      >Default with click</cdr-button>
      <cdr-button disabled>Default Disabled</cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        type="submit"
        modifier="sm"
      >Small button</cdr-button>
      <cdr-button
        type="submit"
        modifier="xs"
      >Extra Small button</cdr-button>
    </div>

    <div class="button-example">
      <cdr-button theme="red">red</cdr-button>
      <cdr-button
        theme="red"
        modifier="sm">red sm</cdr-button>
    </div>
  </div>
</template>

<script>
  module.exports = {
    name: 'live-example',
    components: {
      CdrButton
    }
  }
<\/script>

<style>
  .button-example {
    padding: 10px;
  }
</style>`
    }
  },
  components: {
    Versions,
  },
}
</script>