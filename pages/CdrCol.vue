<template>
  <div>
    <Versions comp-path="CdrCol"/>
    <nuxt-child/>
    <vuep :scope="scope" :value="value"></vuep>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Components from '~/components/_index'

const CdrCol = Components.CdrCol
const CdrRow = Components.CdrRow

export default {
  name: 'Column',
  components: {
    Versions
  },
  data() {
    return {
      scope: { CdrCol, CdrRow },
      value: `
<template>
  <div>
    <h3>Basic Column</h3>
    <cdr-row>
      <cdr-col span="3">
        One
      </cdr-col>
      <cdr-col span="3">
        Two
      </cdr-col>
      <cdr-col span="3">
        Three
      </cdr-col>
      <cdr-col span="3">
        Four
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
  module.exports = {
    name: 'live-example',
    components: {
      CdrCol,
      CdrRow
    }
  }
<\/script>`
    }
  }
}
</script>
