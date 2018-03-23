<template>
  <div>
    <Versions comp-path="CdrA" />
    <nuxt-child/>
      <no-ssr>
        <vuep :value="value" :scope="scope"></vuep>
      </no-ssr>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Components from '~/components/_index'

let  CdrA = Components.CdrA

import '@rei/cdr-a/dist/cdr-a.css'

export default {
  name: 'Anchor',
  data() {
    return {
      scope: { CdrA },
      value: `
<template>
  <div>
    <cdr-a href="https://www.rei.com/">An example link</cdr-a>
    <br/>
    <cdr-a href="https://www.rei.com/" modifier="standalone">An example standalone link</cdr-a>
    <div class="anchor-example overlay-example">
      <cdr-a modifier="contrast" href="#example-contrast">An example contrast link</cdr-a>
    </div>
  </div>
</template>

<script>
  module.exports = {
    name: 'live-example',
    data: function() {
      return {
        testing: 'anchor',
      }
    },
    components: {
      CdrA
    }
  }
<\/script>
<style>
  .anchor-example {
    padding: 20px;
  }

  .overlay-example {
    background-color: black;
  }
</style>`
    }
  },
  components: {
    Versions
  },
}
</script>