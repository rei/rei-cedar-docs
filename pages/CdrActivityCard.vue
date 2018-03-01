<template>
  <div>
    <Versions comp-path="CdrActivityCard"/>
    <nuxt-child/>
    <ActivityCards/>
  </div>
</template>

<script>
import ActivityCards from '~/compositions/activityCard/examples/activity.vue'
import Versions from '~/components/Versions.vue'

import '@rei/cdr-activity-card/dist/cdr-activity-card.css'

export default {
  name:'ActivityCard',
  components: { 
    ActivityCards,
    Versions
  }
}
</script>

<style>

</style>
