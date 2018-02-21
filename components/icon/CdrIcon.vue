<template>
  <div>
    <div id="CdrIcon" v-html="iconMD"></div>
    <Icons/>
  </div>
</template>

<script>
import iconMD from '~/components/icon/archive/cdrIcon.md'
import Icons from '~/components/icon/examples/Icons.vue'

export default {
  name: 'Icon',
  computed: {
    iconMD() {
      return iconMD
    }
  },
  components: {
    Icons,
  }
}
</script>

<style>

</style>
