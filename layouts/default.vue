<template>
  <div>
    <aside>
      <div class="title">
        <cdr-heading level="1">REI Cedar Style Guide</cdr-heading>
      </div>
      <nav>
        <cdr-search @input="updateSearch" bare></cdr-search>
        <cdr-list modifier="unstyled">
          <transition name="list" move-class="list">
            <li v-if="filterNavGroup(componentNames)"><a href="#components">Components</a></li>
          </transition>
          <transition-group class="cdr-list cdr-list--unstyled" move-class="list" name="list" tag="ul">
            <li v-for="name in componentNames" :key="name" v-if="filterNavItem(name)">
              <nuxt-link :to="'/' + name">{{name}}</nuxt-link>
            </li>
          </transition-group>
          <transition name="list" move-class="list">
            <li v-if="filterNavGroup(compositionNames)"><a href="#compositions">Compositions</a></li>
          </transition>
          <transition-group class="cdr-list cdr-list--unstyled" move-class="list" name="list" tag="ul">
            <li v-for="name in compositionNames" :key="name" v-if="filterNavItem(name)">
              <nuxt-link :to="'/' + name">{{name}}</nuxt-link>
            </li>
          </transition-group>
        </cdr-list>
      </nav>
    </aside>
    <transition>
      <div class="content">
        <nuxt/>
      </div>
    </transition>
  </div>
</template>

<script>
import Components from '~/components/_index'
import Compositions from '~/compositions/_index'
import Versions from '~/components/Versions.vue'

const cdrHeading = Components.CdrHeading
const cdrList = Components.CdrList
const cdrSearch = Compositions.CdrSearch

export default {
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    compNames(compsObj) {
      let names = []
      for(const compKey in compsObj) {
        if (compsObj[compKey].name) {
          names.push(compsObj[compKey].name.toString())
        }
      }
      return names
    },
    updateSearch(searchInput) {
      this.searchTerm = searchInput
    },
    filterNavItem(navItem) {
      return (this.searchTerm === '') ? true : navItem.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1
    },
    filterNavGroup(group) {
      return group.some((groupItem) => {
        return this.filterNavItem(groupItem)
      })
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
