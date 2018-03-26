<template>
  <div>
    <Versions comp-path="CdrCheckbox" />
    <nuxt-child/>
    <vuep :scope="scope" :value="value"></vuep>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Components from '~/components/_index'

import '@rei/cdr-checkbox/dist/cdr-checkbox.css'

let CdrCheckbox = Components.CdrCheckbox

export default {
  name: 'Checkbox',
  components: {
    Versions
  },
  data() {
    return {
      scope: { CdrCheckbox },
      value: `
<template>
  <div>
    <h2>Checkboxes</h2>
    <cdr-checkbox
      v-model="ex1"
    >single</cdr-checkbox>
    <p>single: {{ ex1 }}</p>
    <cdr-checkbox
      v-model="ex2"
      true-value="checked"
      false-value="unchecked"
    >checked</cdr-checkbox>
    <p>checked: {{ ex2 }}</p>
    <cdr-checkbox
      v-model="ex3"
      true-value="checked"
    >custom true</cdr-checkbox>
    <p>custom true: {{ ex3 }}</p>
    <cdr-checkbox disabled>disabled checkbox</cdr-checkbox>
    <cdr-checkbox
      v-model="checked"
      disabled
    >disabled and checked checkbox</cdr-checkbox>
  </div>
</template>

<script>
  module.exports = {
    name: 'live-example',
    components: { CdrCheckbox },
    data: function() {
      return {
        checked: true,
        ex1: false,
        ex2: 'checked',
        ex3: 'checked',
      }
    }
  }
<\/script>

<style>
  .wrap {
    width: 180px;
  }

  .flex {
    display: flex;
    align-items: flex-start;
  }

</style>
`
    }
  }
}
</script>

<style>

</style>
