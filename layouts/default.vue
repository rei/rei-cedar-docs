<template>
  <div>
    <aside>
      <h3><a href="#intro">Introduction</a></h3>
      <h3><a href="#docs">Documentation</a></h3>
        <ul>
          <li><a href="#install">Installation</a></li>
          <li><a href="#config">Configuration</a></li>
        </ul>
      <h3><a href="#components">Components</a></h3>
      <ul>
        <li v-for="name in componentNames" :key="name">
          <a :href="'#' + name">{{name}}</a>
          <!-- <Versions comp-path="name"/> -->
        </li>
      </ul>
      <h3><a href="#compositions">Compositions</a></h3>
      <ul>
        <li v-for="name in compositionNames" :key="name">
          <a :href="'#' + name">{{name}}</a>
        </li>
      </ul>
    </aside>
    <div class="content">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Components from '~/components/_index'
import Compositions from '~/compositions/_index'
import Versions from '~/components/Versions.vue'

export default {
  methods: {
    compNames(compsObj) {
      let names = []
      for(const compKey in compsObj) {
        if (compsObj[compKey].name) {
          names.push(compsObj[compKey].name)
        }
      }
      return names
    }
  },
  computed: {
    componentNames () {
      return this.compNames(Components)
    },
    compositionNames () {
      return this.compNames(Compositions)
    }
  },
  components: { Versions }
}
</script>

<style>
</style>
