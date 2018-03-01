<template>
  <div>
    <Versions comp-path="CdrRow"/>
    <nuxt-child/>
    <Rows/>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Rows from '~/components/row/examples/Rows.vue'

export default {
  name: 'Row',
  components: {
    Rows,
    Versions,
  }
}
</script>

<style>

</style>
