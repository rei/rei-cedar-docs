<template>
  <div>
    <Versions comp-path="CdrRow"/>
    <nuxt-child/>
    <vuep :scope="scope" :value="value"></vuep>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Components from '~/components/_index'

const CdrRow = Components.CdrRow
const CdrCol = Components.CdrCol

export default {
  name: 'Row',
  components: {
    Versions,
  },
  data() {
    return {
      scope: { CdrRow, CdrCol },
      value: `
<template>
  <div>
    <cdr-row cols="3">
      <cdr-col>
        One
      </cdr-col>
      <cdr-col>
        Two
      </cdr-col>
      <cdr-col>
        Three
      </cdr-col>
      <cdr-col>
        Four
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
  module.exports = {
    name: 'live-example',
    components: {
      CdrRow,
      CdrCol
    }
  }
<\/script>`
    }
  }
}
</script>