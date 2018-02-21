<template>
  <div>
    <div id="CdrList" v-html="listMD"></div>
    <Lists/>
  </div>
</template>

<script>
import listMD from '~/components/list/archive/cdrList.md'
import Lists from '~/components/list/examples/Lists.vue'

export default {
  name: 'List',
  computed: {
    listMD() {
      return listMD
    }
  },
  components: {
    Lists
  }
}
</script>

<style>

</style>
