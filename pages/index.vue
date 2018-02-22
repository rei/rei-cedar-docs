<template>
  <div>
    <Intro/>
    <Documentation/>
    <CdrComponents/>
    <CdrCompositions/>
  </div>
</template>

<script>
import Intro from '~/components/Introduction.vue'
import Documentation from '~/components/Documentation.vue'
import CdrComponents from '~/components/CdrComponents.vue'
import CdrCompositions from '~/compositions/CdrCompositions.vue'

import '@rei/cdr-assets/dist/cdr-core.css'

export default {
  components: {
    Intro,
    Documentation,
    CdrComponents,
    CdrCompositions
  }
}
</script>

<style>

</style>
