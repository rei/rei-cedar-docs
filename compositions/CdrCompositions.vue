<template>
  <div>
    <h1 id="compositions">Compositions</h1>
    <ActivityCard/>
    <Search/>
  </div>
</template>

<script>
import ActivityCard from '~/compositions/activityCard/CdrActivityCard.vue'
import Search from '~/compositions/search/CdrSearch.vue'

export default {
  name:'CdrCompositions',
  components: {
    ActivityCard,
    Search
  }
}
</script>

<style>

</style>
