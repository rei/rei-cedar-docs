<template>
  <div>
    <aside>
      <cdr-search bare="true"></cdr-search>
      <cdr-list modifier="unstyled">
        <li><a href="/Introduction">Introduction</a></li>
        <li><a href="/Documentation">Documentation</a></li>
        <cdr-list modifier="unstyled">
          <li><a href="/Documentation#install">Installation</a></li>
          <li><a href="/Documentation#config">Configuration</a></li>
        </cdr-list>
        <li><a href="#components">Components</a></li>
        <cdr-list modifier="unstyled">
          <li v-for="name in componentNames" :key="name">
            <nuxt-link :to="'/' + name">{{name}}</nuxt-link>
          </li>
        </cdr-list>
        <li><a href="#compositions">Compositions</a></li>
        <cdr-list modifier="unstyled">
          <li v-for="name in compositionNames" :key="name">
            <nuxt-link :to="'/' + name">{{name}}</nuxt-link>
          </li>
        </cdr-list>
      </cdr-list>
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

const cdrHeading = Components.cdrHeading
const cdrList = Components.CdrList
const cdrSearch = Components.CdrSearch

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
  components: { 
    cdrHeading,
    cdrList,
    cdrSearch,
    Versions,
  }
}
</script>

<style>
</style>
