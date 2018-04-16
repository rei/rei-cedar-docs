<template>
  <div>
    <Versions comp-path="CdrRadio"/>
    <nuxt-child/>
    <vuep :scope="scope" :value="value"></vuep>
    <Radios/>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Radios from '~/components/radio/examples/Radios.vue'
import { CdrRadio } from '~/components/_index'

import '@rei/cdr-radio/dist/cdr-radio.css'

export default {
  name: 'Radio',
  components: {
    Radios,
    Versions
  },
  data() {
    return {
      scope: { CdrRadio },
      value: `
<template>
  <div>
    <cdr-radio
      id="test1"
      name="example"
      value="a1"
      v-model="ex1"
      data-backstop="radio-focus"
    >A1</cdr-radio>
    <cdr-radio
      name="example"
      value="a2"
      v-model="ex1"
    >A2</cdr-radio>
    <cdr-radio
      name="example"
      :value="{val:'a3'}"
      v-model="ex1"
    >A3</cdr-radio>
    <cdr-radio
      name="example"
      value="a4"
      v-model="ex1"
      disabled
    >A4 (disabled)</cdr-radio>
    <p>Group A Picked: {{ ex1 }}</p>
  </div>
</template>

<script>
  module.exports = {
    name: 'live-example',
    components: {
      CdrRadio
    },
    data: function () {
      return {
        ex1: 'a1'
      }
    }
  }
<\/script>`
    }
  }
}
</script>
