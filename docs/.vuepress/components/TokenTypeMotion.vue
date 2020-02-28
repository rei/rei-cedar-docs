<template>
  <tr>
    <td>
      <token-motion-example :prop="prop" />
    </td>
    <td>{{prop.name}}</td>
    <td>{{prop.value}}</td>
  </tr>
</template>

<script>
import TokenMotionExample from './TokenMotionExample';

export default {
  name: 'TypeMotion',
  components: {
    TokenMotionExample,
  },
  props: {
    prop: Object,
  },
  data() {
    return {
      animate: false
    }
  },
};
</script>

<style lang="scss">

</style>