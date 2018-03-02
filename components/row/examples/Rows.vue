<template>
  <div>
    <h2>Rows</h2>
    <BasicRowExample/>
    <ComplexGrid/>
  </div>
</template>

<script>
import BasicRowExample from './demo/BasicRow.vue'
import ComplexGrid from './demo/Complex.vue'

export default {
  name: 'Rows',
  components: {
    BasicRowExample,
    ComplexGrid
  }
}
</script>

<style>

</style>
