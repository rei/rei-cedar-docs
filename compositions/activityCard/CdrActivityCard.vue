<template>
  <div>
    <div id="CdrActivityCard" v-html="activityCardMD"></div>
    <ActivityCards/>
  </div>
</template>

<script>
import ActivityCards from '~/compositions/activityCard/examples/activity.vue'
import activityCardMD from '~/compositions/activityCard/archive/cdrActivityCard.md'

import '@rei/cdr-activity-card/dist/cdr-activity-card.css'

export default {
  name:'ActivityCard',
  computed: {
    activityCardMD() {
      return activityCardMD
    }
  },
  components: { ActivityCards }
}
</script>

<style>

</style>
