<template>
  <div>
    <h2>Columns</h2>
    <BasicColExample/>
    <ComplexGrid/>
  </div>
</template>

<script>
import BasicColExample from './demo/BasicCol.vue'
import ComplexGrid from './demo/Complex.vue'

export default {
  name: 'Columns',
  components: {
    BasicColExample, ComplexGrid
  }
}
</script>

<style>

</style>
