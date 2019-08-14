<template>
  <nav class="nav-links cdr-doc-nav-links" v-if="userLinks.length || repoLink">
    <!-- user links -->
    <!-- {{ userLinks }} -->
    <cdr-accordion
      v-if="item.type === 'links'"
      v-for="(item, index) in userLinks"
      :key="item.text"
      :id="item.text.replace(' ', '-').toLowerCase()"
      class="nav-item cdr-accordion-nav"
      :opened="opened[index]"
      @accordion-toggle="test(index)"
    >
      <template slot="label">
        {{ item.text }}
      </template>
      <ul class="nav-dropdown cdr-doc-side-navigation__child-links">
        <li v-for="navItem in item.items" class="dropdown-item">
          <nav-link :item="navItem" class="cdr-doc-side-navigation__child-link" />
        </li>
      </ul> 
    </cdr-accordion>
    <NavLink v-else :item="item"/>
    <!-- </div> -->
    <!-- repo link -->
    <a v-if="repoLink"
      :href="repoLink"
      class="repo-link"
      target="_blank"
      rel="noopener noreferrer">
      {{ repoLabel }}
      <OutboundLink/>
    </a>
  </nav>
</template>

<script>
import OutboundLink from './OutboundLink.vue'
import DropdownLink from './DropdownLink.vue'
import { CdrAccordion, CdrList } from '@rei/cedar';

// TODO: all cedar css should get glovally loaded
// import '@rei/cdr-accordion/dist/cdr-accordion.css';
import { resolveNavLinkItem } from './util'
import NavLink from './NavLink.vue'

export default {
  components: { OutboundLink, NavLink, DropdownLink, CdrAccordion },
  data() {
    /*
      Initialize as closed accordions.
    */
    return {
      opened: [
        false,
        false,
        false,
        false,
        false
      ]
    };
  },
  created() {
    /*
      Determine if an accordion should be open on load.
      Doing this here because ssr-approved hook.
    */
    this.$site.themeConfig.nav.forEach((item, index) => {
      if (this.showNavGroup(item.text)) {
        this.$set(this.opened, index, true);
      }
    }); 
  },
  computed: {
    userNav () {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
    },
    nav () {
      const { locales } = this.$site
      if (locales && Object.keys(locales).length > 1) {
        let currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$site.themeConfig.locales || {}
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || 'Languages',
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = themeLocales[path] && themeLocales[path].label || locale.lang
            let link
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path)
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path
              }
            }
            return { text, link }
          })
        }
        return [...this.userNav, languageDropdown]
      }
      return this.userNav
    },
    userLinks () {
      return (this.nav || []).map((link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      }))
    },
    repoLink () {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
      }
    },
    repoLabel () {
      if (!this.repoLink) return
      if (this.$site.themeConfig.repoLabel) {
        return this.$site.themeConfig.repoLabel
      }

      const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0]
      const platforms = ['GitHub', 'GitLab', 'Bitbucket']
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i]
        if (new RegExp(platform, 'i').test(repoHost)) {
          return platform
        }
      }

      return 'Source'
    }
  },
  methods: {
    showNavGroup(text) {
      return text.toLowerCase().replace(' ', '-') === this.$page.path.split('/')[1];
    }
  }
}
</script>

<style lang="scss">
  @import './styles/cdr-tokens';
  @import './styles/cdr-doc-tokens';

  .cdr-accordion-nav > div > div {
    padding-left: 0;
  }
  .cdr-accordion-nav > button > span {
    font-weight: 400;
  }
</style>
