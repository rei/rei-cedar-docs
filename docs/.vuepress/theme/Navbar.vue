<template>
  <header class="cdr-doc-side-navigation__items navbar">
    <router-link :to="$localePath" class="home-link cdr-doc-side-navigation__logo-wrap">
      <img class="logo cdr-doc-side-navigation__logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)" :alt="$siteTitle">
      </span>
    </router-link>
    <div class="links">
      <NavLinks/>
    </div>
  </header>
</template>

<script>
import NavLinks from './NavLinks.vue'

export default {
  components: {
    NavLinks,
  },
}
</script>

<style lang="scss">
  @import './styles/cdr-tokens';
  @import './styles/cdr-doc-tokens';

  .cdr-doc-side-navigation__items {
    border-top: $cdr-doc-border-separator;
  }
</style>
