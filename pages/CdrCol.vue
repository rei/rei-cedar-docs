<template>
  <div>
    <Versions comp-path="CdrCol"/>
    <nuxt-child/>
    <Columns/>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Columns from '~/components/column/examples/Columns.vue'

export default {
  name: 'Column',
  components: {
    Columns,
    Versions
  }
}
</script>

<style>

</style>
