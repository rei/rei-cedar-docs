<template>
  <div>
    <div id="CdrHeading" v-html="headingMD"></div>
    <Headings/>
  </div>
</template>

<script>
import headingMD from '~/components/heading/archive/cdrHeading.md'
import Headings from '~/components/heading/examples/Headings.vue'

export default {
  name: 'Heading',
  components: {
    Headings
  },
  computed: {
    headingMD() {
      return headingMD
    }
  }
}
</script>

<style>

</style>
