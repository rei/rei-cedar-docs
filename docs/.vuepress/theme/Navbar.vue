<template>
  <header class="cdr-doc-side-navigation__items navbar">
    <!-- <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/> -->
    <router-link :to="$localePath" class="home-link cdr-doc-side-navigation__logo-wrap">
      <img class="logo cdr-doc-side-navigation__logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)" :alt="$siteTitle">
      </span>
    </router-link>
    <div class="links">
      <!-- <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/>
      <SearchBox v-else-if="$site.themeConfig.search !== false"/> -->
      <NavLinks class="can-hide"/>
    </div>
  </header>
</template>

<script>
import SidebarButton from './SidebarButton.vue'
// import AlgoliaSearchBox from './AlgoliaSearchBox'
// import SearchBox from './SearchBox.vue'
import NavLinks from './NavLinks.vue'

export default {
  components: {
    SidebarButton, NavLinks, 
    // SearchBox, AlgoliaSearchBox
  },
  computed: {
    // algolia () {
    //   return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    // },
    // isAlgoliaSearch () {
    //   return this.algolia && this.algolia.apiKey && this.algolia.indexName
    // }
  }
}
</script>

<style lang="scss">
  @import './styles/cdr-tokens';
  @import './styles/cdr-doc-tokens';

  .cdr-doc-side-navigation__items {
    border-top: $cdr-doc-border-separator;
  }
</style>
